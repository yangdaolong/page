//Retrive apple app store campaign querystring values, save in cookie.

//function to grab params from cookie
function getAaplCookie() {
  var i, x, y, cookie = document.cookie.split(';');
  for (i = 0; i < cookie.length; i++) {
    x = cookie[i].substr(0, cookie[i].indexOf('='));
    y = cookie[i].substr(cookie[i].indexOf('=') + 1);
    x = x.replace(/^\s+|\s+$/g, '');
    if (x == 'apple_analytics') {
      return unescape(y);
    }
  }
}

//function to create cookie
function setAaplCookie(value) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + 30); //for 30 days
  var c_value = escape(value) + '; domain=.matterport.com; path=/; expires=' + exdate.toUTCString();
  document.cookie = 'apple_analytics=' + c_value;
}

//utility to find referrer match
function aaplFound(haystack) {
  for (var i = 0; i < haystack.length; i++) {
    if (document.referrer.indexOf(haystack[i]) > -1) {
      return true;
    }
  }
  return false;
}

function aaplCampaign() {
  var param_value = getAaplCookie();
  if (param_value != null && param_value != '' && param_value != 'undefined') {
    //aapl cookie has data, don't overwrite
    return;
  }

  //else create a new aapl cookie
  var pageURL = window.location.search.substring(1),
    URLVariables = pageURL.split('&'),
    utmSource = '',
    utmMedium = '',
    utmCampaign = '';
  for (var i = 0; i < URLVariables.length; i++) {
    var parameterName = URLVariables[i].split('=');
    switch (parameterName[0]) {
      case 'utm_source':
        utmSource = parameterName[1].split('#')[0];
        break;
      case 'utm_medium':
        utmMedium = parameterName[1].split('#')[0];
        break;
      case 'utm_campaign':
        utmCampaign = parameterName[1].split('#')[0];
        break;
    }
  }

  param_value = utmSource + '-' + utmMedium + '-' + utmCampaign;

  if (param_value == '--' && document.referrer != '') {
    var searchEngines = ['google', 'bing', 'yahoo', 'duckduckgo', 'baidu', 'ecosia'];
    var socialNetworks = ['facebook.com', 'instagram.com', 'youtube.com', 'linkedin.com', 'pinterest.com'];

    if (aaplFound(searchEngines)) {
      param_value = 'web-organic';
    } else if (aaplFound(socialNetworks)) {
      param_value = 'web-social';
    } else if (document.referrer.indexOf('matterport.com') > -1) {
      param_value = 'web-none';
    } else {
      param_value = 'web-referral';
    }
  } else if (param_value == '--') {
    param_value = 'web-direct';
  }
  //create cookie
  setAaplCookie(param_value);
}

function aaplLinks() {
  var param_value = getAaplCookie();
  if (param_value != null && param_value != '' && param_value != 'undefined') {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
      if (links[i].href && links[i].href.indexOf('apps.apple.com') > -1) {
        var link = links[i].href.split('?');
        if (link[1] != undefined) {
          var params = link[1].split('&');
          var ctFound = false;
          for (var j = 0; j < params.length; j++) {
            var vals = params[j].split('=');
            if (vals[0] == 'ct') {
              vals[1] = param_value;
              params[j] = vals.join('=');
              ctFound = true;
            }
          }
          if (!ctFound) {
            params.push('ct=' + param_value);
          }
          link[1] = params.join('&');
        } else {
          link[1] = 'ct=' + param_value;
        }
        links[i].href = link.join('?');
      }
    }
  }
}

try {
  aaplCampaign();
  aaplLinks();
} catch (e) {
  //fail silently
}
