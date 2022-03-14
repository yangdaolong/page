;(function(){
    'use strict';

    var cookieExpiry = 365 * 3;   // Store cookie values for 3 years (specified in days)
    var cookieDomain = 'matterport.com';
    
    var debugLog = function(msg) {
        if(location.hash === '#debug') {
            console.log(msg);
        }
    };

    var getQueryParam = function(queryParam) {
        queryParam = queryParam.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
        var match = location.search.match(new RegExp("[?&]"+queryParam+"=([^&]+)(&|$)"));
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    };

    // Cookie CRUD functions from plainjs.com
    var getCookie = function(name) {
        var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return v ? v[2] : null;
    };
    var setCookie = function(name, value, days, domain) {
        var d = new Date();
        d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
        var cookieDomain = '';
        if (typeof domain === 'string' && domain.length > 0) {
            cookieDomain = ';domain=.'+domain;
        }
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString() + cookieDomain;
    };
    var deleteCookie = function(name, domain) {
        setCookie(name, '', -1, domain);
    };

    var utmParams = [
        'utm_medium',
        'utm_source',
        'utm_campaign',
        'utm_content',
        'utm_term'
    ];
    var utmFormFields = {
        'utm_medium': {initial: 'utmorigmedium', latest: 'utm_medium__c'},
        'utm_source': {initial: 'utmorigsource', latest: 'utm_source__c'},
        'utm_campaign': {initial: 'utm_orig_campaign__c', latest: 'utm_campaign__c'},
        'utm_content': {initial: 'utm_orig_content__c', latest: 'utm_content__c'},
        'utm_term': {initial: 'utm_orig_term__c', latest: 'utm_term__c'}
    };

    // Migrate old Digital Pi JSON-structured cookies to new cookies
    var migrateDPiUTMCookies = function() {
        
        // Routine to copy a single cookie value from the JSON structure into our new cookie
        var copyCookieValue = function(jsonCookieValue, sourceName, targetCookieName) {
            if ((typeof jsonCookieValue === 'object') && 
                (typeof jsonCookieValue[sourceName] !== "undefined")) {
                setCookie(targetCookieName, jsonCookieValue[sourceName], cookieExpiry, cookieDomain);
            }
        };

        // Migrate initial (original) UTM values
        var dpiUtmOriginalValues = getCookie('dpi_utmOrigVals');
        if (dpiUtmOriginalValues !== null) {
            dpiUtmOriginalValues = JSON.parse(dpiUtmOriginalValues);
            copyCookieValue(dpiUtmOriginalValues, 'utmorigmedium', 'utm_medium_initial');
            copyCookieValue(dpiUtmOriginalValues, 'utmorigsource', 'utm_source_initial');
            copyCookieValue(dpiUtmOriginalValues, 'utm_orig_campaign__c', 'utm_campaign_initial');
            copyCookieValue(dpiUtmOriginalValues, 'utm_orig_content__c', 'utm_content_initial');
            copyCookieValue(dpiUtmOriginalValues, 'utm_orig_term__c', 'utm_term_initial');
        }

        // Migrate latest UTM values
        var dpiUtmValues = getCookie('dpi_utmVals');
        if (dpiUtmValues !== null) {
            dpiUtmValues = JSON.parse(dpiUtmValues);
            copyCookieValue(dpiUtmValues, 'utm_medium__c', 'utm_medium_latest');
            copyCookieValue(dpiUtmValues, 'utm_source__c', 'utm_source_latest');
            copyCookieValue(dpiUtmValues, 'utm_campaign__c', 'utm_campaign_latest');
            copyCookieValue(dpiUtmValues, 'utm_content__c', 'utm_content_latest');
            copyCookieValue(dpiUtmValues, 'utm_term__c', 'utm_term_latest');
        }

        // Migrate last URL value
        var dpiLastUtmUrl = getCookie('dpi_lastUtmUrl');
        if (dpiLastUtmUrl !== null) {
            setCookie('utm_latest_url', dpiLastUtmUrl, cookieExpiry, cookieDomain);
        }
    };

    // Save utm_ query string parameters into cookies (if present)
    var saveUTMParameters = function() {
        var queryUtmValues = {};
        var queryUtmValuesFound = 0;

        // Gather query parameter values
        if (location.search.length) {
            debugLog('Query string found; searching for UTM parameters and values...');
            var numParams = utmParams.length;
            for (var i = 0; i < numParams; i++) {
                var utmParam = utmParams[i];
                var queryValue = getQueryParam(utmParam);
                if (queryValue) {
                    queryUtmValues[utmParam] = queryValue;
                    queryUtmValuesFound += 1;
                }
                else {
                    queryUtmValues[utmParam] = "NULL";
                }
            }
            debugLog(queryUtmValues);

            // If any UTM parameters were found, we write all UTM parameters to cookies
            if (queryUtmValuesFound > 0) {
                var numParams = utmParams.length;
                for (var i = 0; i < numParams; i++) {
                    var utmParam = utmParams[i];
                    var queryValue = queryUtmValues[utmParam];

                    // Store utm_*_initial version of cookie if it doesn't already exist
                    var cookieValue = getCookie(utmParam + '_initial');
                    if ((cookieValue === null) || (cookieValue === ""))
                        setCookie(utmParam + '_initial', queryValue, cookieExpiry, cookieDomain);

                    // Store utm_*_latest version of cookie, overwriting any existing values
                    setCookie(utmParam + '_latest', queryValue, cookieExpiry, cookieDomain);
                }
                // Store current URL
                setCookie('utm_latest_url', location.href, cookieExpiry, cookieDomain);
            }

            // If gclid is present, save it in a cookie
            var queryValue = getQueryParam('gclid');
            if (queryValue)
                setCookie('gclid', queryValue, cookieExpiry, cookieDomain);
        }
    };

    // Populate hidden parameters with utm_ values on Marketo forms
    var populateMarketoUTMParameters = function() {
        debugLog('Checking for MktoForms2 API...');
        if(typeof MktoForms2 === 'object') {
            debugLog('MktoForms2 API detected');
            MktoForms2.whenReady( function(form) {
                var f = form.getFormElem()[0];   // Form element
                var $ = MktoForms2.$;            // jQuery
                
                debugLog('Marketo form detected (#mktoForm_' + form.getId() + ')');

                // Routine to insert a single Marketo hidden field
                var insertMarketoHiddenField = function(name, value) {
                    var formFieldObject = {};
                    formFieldObject[name] = value;
                    form.addHiddenFields(formFieldObject);
                    if (!$(f).attr('digitalpi-utms-added')) {  // Copied from old DPi code
                        $(f).attr('digitalpi-utms-added', true);
                    }
                };
            
                // Iterate across all parameter types, initial and latest, and set form fields
                var numParams = utmParams.length;
                for (var i = 0; i < numParams; i++) {
                    var utmParam = utmParams[i];

                    // Set field for initial version of parameter (if it's stored)
                    var cookieName = utmParam + '_initial';
                    var cookieVal = getCookie(cookieName);
                    if (cookieVal) {
                        debugLog('Adding UTM values from ' + cookieName + ' cookie to Marketo form #mktoForm_' + form.getId() );
                        var formFieldName = utmFormFields[utmParam]['initial'];
                        insertMarketoHiddenField(formFieldName, cookieVal);
                    } else {
                        debugLog(cookieName + ' cookie not found');
                    }
    
                    // Set field for latest version of parameter (if it's stored)
                    var cookieName = utmParam + '_latest';
                    var cookieVal = getCookie(cookieName);
                    if (cookieVal) {
                        debugLog('Adding UTM values from ' + cookieName + ' cookie to Marketo form #mktoForm_' + form.getId() );
                        var formFieldName = utmFormFields[utmParam]['latest'];
                        insertMarketoHiddenField(formFieldName, cookieVal);
                    } else {
                        debugLog(cookieName + ' cookie not found');
                    }
                }

                // Set utm_latest_url form field
                var cookieName = 'utm_latest_url';
                var cookieVal = getCookie(cookieName);
                if (cookieVal) {
                    debugLog('Adding UTM values from ' + cookieName + ' cookie to Marketo form #mktoForm_' + form.getId() );
                    var formFieldName = 'utm_referral_code__c';
                    insertMarketoHiddenField(formFieldName, cookieVal);
                } else {
                    debugLog(cookieName + ' cookie not found');
                }
                
                // Set gclid form field
                var cookieName = 'gclid';
                var cookieVal = getCookie(cookieName);
                if (cookieVal) {
                    debugLog('Adding UTM values from ' + cookieName + ' cookie to Marketo form #mktoForm_' + form.getId() );
                    var formFieldName = 'GCLID__c_contact';
                    insertMarketoHiddenField(formFieldName, cookieVal);
                } else {
                    debugLog(cookieName + ' cookie not found');
                }
            });
        }
        else {
            debugLog('MktoForms2 API not detected; exiting...');
            return false;
        }

    };

    var run = function() {
        debugLog('Running Matterport Cookies run() function');

        // Migrating old Digital Pi cookies to new UTM cookies
        migrateDPiUTMCookies();

        // Save query parameters into UTM cookies
        saveUTMParameters();

        // If a Marketo form is loaded, populate hidden Marketo fields with UTM parameters
        var marketoTimer = window.setInterval(function() {
            if (typeof MktoForms2 === 'object') {
                window.clearInterval(marketoTimer);
                populateMarketoUTMParameters();
            }
        }, 1000);
    };

    if(/complete|interactive|loaded/.test(document.readyState)) {
        debugLog('Document loaded; calling run()');
        run();
    }
    else {
        debugLog('Document not loaded; setting DOMContentLoaded event listener to call run()');
        document.addEventListener('DOMContentLoaded', function() {
            debugLog('DOMContentLoaded event fired; calling run()');
            run();
        });
    }

})();
