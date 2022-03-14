! function () {
  var analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize)
    if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
    else {
      analytics.invoked = !0;
      analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "addSourceMiddleware", "addIntegrationMiddleware", "setAnonymousId", "addDestinationMiddleware"];
      analytics.factory = function (e) {
        return function () {
          var t = Array.prototype.slice.call(arguments);
          t.unshift(e);
          analytics.push(t);
          return analytics
        }
      };
      for (var e = 0; e < analytics.methods.length; e++) {
        var key = analytics.methods[e];
        analytics[key] = analytics.factory(key)
      }
      analytics.load = function (key, e) {
        var t = document.createElement("script");
        t.type = "text/javascript";
        t.async = !0;
        t.src = "https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(t, n);
        analytics._loadOptions = e
      };

      analytics.SNIPPET_VERSION = "4.13.1";
      var consentAll = false;
      var segmentIntegrations = { All: false, 'Google Analytics': true, 'Segment.io': true };
      var consentConfiguration = [{
        customCategory: "performance",
        integrations: {
          'FullStory': true
        }
      }, {
        customCategory: "functionality",
        integrations: {}
      }, {
        customCategory: "targeting",
        integrations: {
          'Google Tag Manager': true
        }
      }];

      // To get values from cookie without use drupal framework
      function getCookie(name) {
          var dc = document.cookie;
          var prefix = name + "=";
          var begin = dc.indexOf("; " + prefix);
          if (begin == -1) {
              begin = dc.indexOf(prefix);
              if (begin != 0) return null;
          }
          else
          {
              begin += 2;
              var end = document.cookie.indexOf(";", begin);
              if (end == -1) {
              end = dc.length;
              }
          }
          return decodeURI(dc.substring(begin + prefix.length, end));
      }

      var cookieConsentCookie = getCookie("cookie_consent_v3");
      if (cookieConsentCookie && cookieConsentCookie !== '' && cookieConsentCookie !== null) {
        try {
          var cookieConsent = JSON.parse(unescape(cookieConsentCookie));
          consentAll = cookieConsent["strictlyNecessary"]
            && cookieConsent.custom
            && cookieConsent.custom["performance"]
            && cookieConsent.custom["functionality"]
            && cookieConsent.custom["targeting"];

          if (!consentAll) {
            consentConfiguration.forEach(function (o) {
              if (cookieConsent.custom && cookieConsent.custom[o.customCategory]) {
                segmentIntegrations = Object.assign(segmentIntegrations, o.integrations);
              }
            });
          }
        } catch (e) {
          //silent fail
        }
      }

      if (consentAll) {
        analytics.load("yzL5IiV0IFYY1kPlgipmE5C8Ih7iFyrj");
        analytics.page();
      } else {
        analytics.load("yzL5IiV0IFYY1kPlgipmE5C8Ih7iFyrj", { integrations: segmentIntegrations });
        analytics.page('', {}, {ip: '0.0.0.0'});
      }
    }
}();
