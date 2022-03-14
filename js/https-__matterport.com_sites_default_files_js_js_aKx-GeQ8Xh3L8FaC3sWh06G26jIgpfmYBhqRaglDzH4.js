/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
/*! iFrame Resizer (iframeSizer.min.js ) - v4.0.4 - 2019-03-04
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(u){if("undefined"!=typeof window){var e,l=0,m=!1,n=!1,p="message".length,b="[iFrameSizer]",y=b.length,v=null,r=window.requestAnimationFrame,g={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},F={},i=null,h={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",onClosed:function(){},onInit:function(){},onMessage:function(){O("onMessage function not defined")},onResized:function(){},onScroll:function(){return!0}},I={};window.jQuery&&((e=window.jQuery).fn?e.fn.iFrameResize||(e.fn.iFrameResize=function(i){return this.filter("iframe").each(function(e,n){d(n,i)}).end()}):z("","Unable to bind to jQuery, it is not fully loaded.")),"function"==typeof define&&define.amd?define([],B):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=B()),window.iFrameResize=window.iFrameResize||B()}function w(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function M(e,n,i){e.addEventListener(n,i,!1)}function x(e,n,i){e.removeEventListener(n,i,!1)}function o(e){return b+"["+(i="Host page: "+(n=e),window.top!==window.self&&(i=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+n:"Nested host page: "+n),i)+"]";var n,i}function t(e){return F[e]?F[e].log:m}function k(e,n){a("log",e,n,t(e))}function z(e,n){a("info",e,n,t(e))}function O(e,n){a("warn",e,n,!0)}function a(e,n,i,t){!0===t&&"object"==typeof window.console&&console[e](o(n),i)}function s(n){function a(){e("Height"),e("Width"),P(function(){j(h),C(w),l("onResized",h)},h,"init")}function e(e){var n=Number(F[w]["max"+e]),i=Number(F[w]["min"+e]),t=e.toLowerCase(),o=Number(h[t]);k(w,"Checking "+t+" is in range "+i+"-"+n),o<i&&(o=i,k(w,"Set "+t+" to min value")),n<o&&(o=n,k(w,"Set "+t+" to max value")),h[t]=""+o}function s(e){return g.substr(g.indexOf(":")+p+e)}function d(i,t){var e,n,o;e=function(){var e,n;H("Send Page Info","pageInfo:"+(e=document.body.getBoundingClientRect(),n=h.iframe.getBoundingClientRect(),JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})),i,t)},n=32,I[o=t]||(I[o]=setTimeout(function(){I[o]=null,e()},n))}function c(e){var n=e.getBoundingClientRect();return N(w),{x:Math.floor(Number(n.left)+Number(v.x)),y:Math.floor(Number(n.top)+Number(v.y))}}function f(e){var n=e?c(h.iframe):{x:0,y:0},i={x:Number(h.width)+n.x,y:Number(h.height)+n.y};k(w,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](i.x,i.y):O(w,"Unable to scroll to requested position, window.parentIFrame not found"):(v=i,u(),k(w,"--"))}function u(){!1!==l("onScroll",v)?C(w):S()}function l(e,n){return R(w,e,n)}var i,t,o,r,m,g=n.data,h={},w=null;"[iFrameResizerChild]Ready"===g?function(){for(var e in F)H("iFrame requested init",A(e),document.getElementById(e),e)}():b===(""+g).substr(0,y)&&g.substr(y).split(":")[0]in F?(m=g.substr(y).split(":"),h={iframe:F[m[0]]&&F[m[0]].iframe,id:m[0],height:m[1],width:m[2],type:m[3]},w=h.id,F[w]&&(F[w].loaded=!0),(r=h.type in{true:1,false:1,undefined:1})&&k(w,"Ignoring init message from meta parent page"),!r&&(o=!0,F[t=w]||(o=!1,O(h.type+" No settings for "+t+". Message was: "+g)),o)&&(k(w,"Received: "+g),i=!0,null===h.iframe&&(O(w,"IFrame ("+h.id+") not found"),i=!1),i&&function(){var e,i=n.origin,t=F[w]&&F[w].checkOrigin;if(t&&""+i!="null"&&!(t.constructor===Array?function(){var e=0,n=!1;for(k(w,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===i){n=!0;break}return n}():(e=F[w]&&F[w].remoteHost,k(w,"Checking connection is from: "+e),i===e)))throw new Error("Unexpected message received from: "+i+" for "+h.iframe.id+". Message was: "+n.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(F[w]&&F[w].firstRun&&F[w]&&(F[w].firstRun=!1),h.type){case"close":F[w].closeRequeston?R(w,"onCloseRequest",F[w].iframe):E(h.iframe);break;case"message":r=s(6),k(w,"onMessage passed: {iframe: "+h.iframe.id+", message: "+r+"}"),l("onMessage",{iframe:h.iframe,message:JSON.parse(r)}),k(w,"--");break;case"scrollTo":f(!1);break;case"scrollToOffset":f(!0);break;case"pageInfo":d(F[w]&&F[w].iframe,w),function(){function e(n,i){function t(){F[r]?d(F[r].iframe,r):o()}["scroll","resize"].forEach(function(e){k(r,n+e+" listener for sendPageInfo"),i(window,e,t)})}function o(){e("Remove ",x)}var r=w;e("Add ",M),F[r]&&(F[r].stopPageInfo=o)}();break;case"pageInfoStop":F[w]&&F[w].stopPageInfo&&(F[w].stopPageInfo(),delete F[w].stopPageInfo);break;case"inPageLink":e=s(9),i=e.split("#")[1]||"",t=decodeURIComponent(i),(o=document.getElementById(t)||document.getElementsByName(t)[0])?(n=c(o),k(w,"Moving to in page link (#"+i+") at x: "+n.x+" y: "+n.y),v={x:n.x,y:n.y},u(),k(w,"--")):window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(i):k(w,"In page link #"+i+" not found and window.parentIFrame not found"):k(w,"In page link #"+i+" not found");break;case"reset":W(h);break;case"init":a(),l("onInit",h.iframe);break;default:a()}var e,n,i,t,o,r}())):z(w,"Ignored: "+g)}function R(e,n,i){var t=null,o=null;if(F[e]){if("function"!=typeof(t=F[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");o=t(i)}return o}function T(e){var n=e.id;delete F[n]}function E(e){var n=e.id;k(n,"Removing iFrame: "+n);try{e.parentNode&&e.parentNode.removeChild(e)}catch(e){O(e)}R(n,"onClosed",n),k(n,"--"),T(e)}function N(e){null===v&&k(e,"Get page position: "+(v={x:window.pageXOffset!==u?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==u?window.pageYOffset:document.documentElement.scrollTop}).x+","+v.y)}function C(e){null!==v&&(window.scrollTo(v.x,v.y),k(e,"Set page position: "+v.x+","+v.y),S())}function S(){v=null}function W(e){k(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),N(e.id),P(function(){j(e),H("reset","reset",e.iframe,e.id)},e,"reset")}function j(i){function t(e){n||"0"!==i[e]||(n=!0,k(o,"Hidden iFrame detected, creating visibility listener"),function(){function n(){Object.values(F).forEach(function(n){function e(e){return"0px"===(F[n]&&F[n].iframe.style[e])}F[n]&&(i=F[n].iframe,null!==i.offsetParent)&&(e("height")||e("width"))&&H("Visibility change","resize",F[n].iframe,n);var i})}function e(e){k("window","Mutation observed: "+e[0].target+" "+e[0].type),c(n,16)}var i=w();i&&(t=document.querySelector("body"),o={attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0},new i(e).observe(t,o));var t,o}())}function e(e){var n;n=e,i.id?(i.iframe.style[n]=i[n]+"px",k(i.id,"IFrame ("+o+") "+n+" set to "+i[n]+"px")):k("undefined","messageData id not set"),t(e)}var o=i.iframe.id;F[o]&&(F[o].sizeHeight&&e("height"),F[o].sizeWidth&&e("width"))}function P(e,n,i){i!==n.type&&r?(k(n.id,"Requesting animation frame"),r(e)):e()}function H(e,n,i,t,o){var r,a=!1;t=t||i.id,F[t]&&(i&&"contentWindow"in i&&null!==i.contentWindow?(r=F[t]&&F[t].targetOrigin,k(t,"["+e+"] Sending msg to iframe["+t+"] ("+n+") targetOrigin: "+r),i.contentWindow.postMessage(b+n,r)):O(t,"["+e+"] IFrame("+t+") not found"),o&&F[t]&&F[t].warningTimeout&&(F[t].msgTimeout=setTimeout(function(){!F[t]||F[t].loaded||a||(a=!0,O(t,"IFrame has not responded within "+F[t].warningTimeout/1e3+" seconds. Check iFrameResizer.contentWindow.js has been loaded in iFrame. This message can be ignored if everything is working, or you can set the warningTimeout option to a higher value or zero to suppress this warning."))},F[t].warningTimeout)))}function A(e){return e+":"+F[e].bodyMarginV1+":"+F[e].sizeWidth+":"+F[e].log+":"+F[e].interval+":"+F[e].enablePublicMethods+":"+F[e].autoResize+":"+F[e].bodyMargin+":"+F[e].heightCalculationMethod+":"+F[e].bodyBackground+":"+F[e].bodyPadding+":"+F[e].tolerance+":"+F[e].inPageLinks+":"+F[e].resizeFrom+":"+F[e].widthCalculationMethod}function d(i,e){function n(e){var n=e.split("Callback");if(2===n.length){var i="on"+n[0].charAt(0).toUpperCase()+n[0].slice(1);this[i]=this[e],delete this[e],O(f,"Deprecated: '"+e+"' has been renamed '"+i+"'. The old method will be removed in the next major version.")}}var t,o,r,a,s,d,c,f=(""===(t=i.id)&&(i.id=(o=e&&e.id||h.id+l++,null!==document.getElementById(o)&&(o+=l++),t=o),m=(e||{}).log,k(t,"Added missing iframe ID: "+t+" ("+i.src+")")),t);f in F&&"iFrameResizer"in i?O(f,"Ignored iFrame, already setup."):(d=(d=e)||{},F[f]={firstRun:!0,iframe:i,remoteHost:i.src.split("/").slice(0,3).join("/")},function(e){if("object"!=typeof e)throw new TypeError("Options is not an object")}(d),Object.keys(d).forEach(n,d),function(e){for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&(F[f][n]=Object.prototype.hasOwnProperty.call(e,n)?e[n]:h[n])}(d),F[f]&&(F[f].targetOrigin=!0===F[f].checkOrigin?""===(c=F[f].remoteHost)||"file://"===c?"*":c:"*"),function(){switch(k(f,"IFrame scrolling "+(F[f]&&F[f].scrolling?"enabled":"disabled")+" for "+f),i.style.overflow=!1===(F[f]&&F[f].scrolling)?"hidden":"auto",F[f]&&F[f].scrolling){case"omit":break;case!0:i.scrolling="yes";break;case!1:i.scrolling="no";break;default:i.scrolling=F[f]?F[f].scrolling:"no"}}(),function(){function e(e){1/0!==F[f][e]&&0!==F[f][e]&&(i.style[e]=F[f][e]+"px",k(f,"Set "+e+" = "+F[f][e]+"px"))}function n(e){if(F[f]["min"+e]>F[f]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}n("Height"),n("Width"),e("maxHeight"),e("minHeight"),e("maxWidth"),e("minWidth")}(),"number"!=typeof(F[f]&&F[f].bodyMargin)&&"0"!==(F[f]&&F[f].bodyMargin)||(F[f].bodyMarginV1=F[f].bodyMargin,F[f].bodyMargin=F[f].bodyMargin+"px"),r=A(f),(s=w())&&(a=s,i.parentNode&&new a(function(e){e.forEach(function(e){Array.prototype.slice.call(e.removedNodes).forEach(function(e){e===i&&E(i)})})}).observe(i.parentNode,{childList:!0})),M(i,"load",function(){var e,n;H("iFrame.onload",r,i,u,!0),e=F[f]&&F[f].firstRun,n=F[f]&&F[f].heightCalculationMethod in g,!e&&n&&W({iframe:i,height:0,width:0,type:"init"})}),H("init",r,i,u,!0),F[f]&&(F[f].iframe.iFrameResizer={close:E.bind(null,F[f].iframe),removeListeners:T.bind(null,F[f].iframe),resize:H.bind(null,"Window resize","resize",F[f].iframe),moveToAnchor:function(e){H("Move to anchor","moveToAnchor:"+e,F[f].iframe,f)},sendMessage:function(e){H("Send Message","message:"+(e=JSON.stringify(e)),F[f].iframe,f)}}))}function c(e,n){null===i&&(i=setTimeout(function(){i=null,e()},n))}function f(){"hidden"!==document.visibilityState&&(k("document","Trigger event: Visiblity change"),c(function(){q("Tab Visable","resize")},16))}function q(i,t){Object.keys(F).forEach(function(e){var n;F[n=e]&&"parent"===F[n].resizeFrom&&F[n].autoResize&&!F[n].firstRun&&H(i,t,document.getElementById(e),e)})}function L(){M(window,"message",s),M(window,"resize",function(){var e;k("window","Trigger event: "+(e="resize")),c(function(){q("Window "+e,"resize")},16)}),M(document,"visibilitychange",f),M(document,"-webkit-visibilitychange",f)}function B(){function t(e,n){n&&(!function(){if(!n.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==n.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+n.tagName+">")}(),d(n,e),o.push(n))}var o;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!r;e+=1)r=window[n[e]+"RequestAnimationFrame"];r||k("setup","RequestAnimationFrame not supported")}(),L(),function(e,n){var i;switch(o=[],(i=e)&&i.enablePublicMethods&&O("enablePublicMethods option has been removed, public methods are now always available in the iFrame"),typeof n){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(n||"iframe"),t.bind(u,e));break;case"object":t(e,n);break;default:throw new TypeError("Unexpected data type ("+typeof n+")")}return o}}}();

(function ($, Drupal, iframeResizerSettings) {

  'use strict';

  // Set up the iFrame Resizer library's options.
  var options = {};
  if (iframeResizerSettings.advanced.override_defaults) {
    if (iframeResizerSettings.advanced.options.maxHeight === -1) {
      iframeResizerSettings.advanced.options.maxHeight = Infinity;
    }

    if (iframeResizerSettings.advanced.options.maxWidth === -1) {
      iframeResizerSettings.advanced.options.maxWidth = Infinity;
    }

    options = iframeResizerSettings.advanced.options;
  }

  Drupal.behaviors.initIframeResizer = {
    attach: function (context, settings) {
      var selector = 'iframe';
      if (typeof settings.iframeResizer.advanced.targetSelectors !== 'undefined') {
        selector = settings.iframeResizer.advanced.targetSelectors;
      }
      $(selector, context).iFrameResize(options);
    }
  };

})(jQuery, Drupal, drupalSettings.iframeResizer);
;
/**
 * @file
 * Improved multi select module JS library.
 */

/**
 * Attaches improved multi select.
 */

(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.improved_multi_select = {

    /**
     * Detaches registered behaviors from a page element.
     *
     * @param {HTMLDocument|HTMLElement} [context=document]
     *   An element to detach behaviors from.
     * @param {object} [settings=drupalSettings]
     *   An object containing settings for the current context.
     * @param {string} [trigger='unload']
     *   A string containing what's causing the behaviors to be detached.
     */
    detach: function (context, settings, trigger) {
      const options = settings.improved_multi_select;

      // Unbind listeners.
      remoteListeners(context);

      // Remove added elements.
      options.selectors.forEach(function (selector) {
        $(selector, context).once('improvedselect').each(function () {
          let $select = $(this);
          let imsSelectId = $select.attr('id');

          // Prevent duplicates on AJAX.
          $('#improvedselect-' + imsSelectId).remove();
          $('#' + imsSelectId + '-cloned').remove();
        });
      });
    },

    /**
     * Attach improved multi select.
     *
     * @param {Element} context
     *   The context for attaching the behavior.
     * @param {object} settings
     *   Options object.
     */
    attach: function (context, settings) {

      // Add placeholder text in the search box
      $(document).ready(function () {
        let searchBox = $('input.improvedselect_filter');
        if (searchBox && settings.improved_multi_select && settings.improved_multi_select.placeholder_text) {
          searchBox.attr("placeholder", settings.improved_multi_select.placeholder_text);
        }
      });

      if (!settings.improved_multi_select || !settings.improved_multi_select.selectors) {
        // Let other scripts know improvedSelect has been attached.
        $.event.trigger('improvedMultiSelectAttached');

        return;
      }

      const options = settings.improved_multi_select;

      options.selectors.forEach(function (selector) {
        improvedselectAttach(selector, options, context);
      });

      // It looks like the paragraphs module leads to multiple attach calls.
      // 1st one for an element added via AJAX, 2nd one for whole form.
      remoteListeners(context);
      $('.improvedselect_filter', context).bind('input', function () {
        improvedselectFilter($(this).attr('sid'), options, context);
      });

      // Add selected items.
      $('.improvedselect .add', context).click(function () {
        let sid = $(this).attr('sid');
        $('#improvedselect-' + sid + ' .improvedselect_all .selected', context).each(function () {
          let $opt = $(this);
          $opt.removeClass('selected');
          improvedselectUpdateGroupVisibility($opt, 1);
          $('#improvedselect-' + sid + ' .improvedselect_sel', context).append($opt);
        });
        improvedselectUpdate(sid, context);
      });

      // Remove selected items.
      $('.improvedselect .del', context).click(function () {
        let sid = $(this).attr('sid');
        $('#improvedselect-' + sid + ' .improvedselect_sel .selected', context).each(function () {
          let $opt = $(this);
          $opt.removeClass('selected');
          $('#improvedselect-' + sid + ' .improvedselect_all', context).append($opt);
          improvedselectUpdateGroupVisibility($opt, 0);
        });
        // Force re-filtering.
        $('#improvedselect-' + sid + ' .improvedselect_filter', context).attr('prev', '');
        // Re-filtering will handle the rest.
        improvedselectFilter(sid, options, context);
        improvedselectUpdate(sid, context);
      });

      // Add all items.
      $('.improvedselect .add_all', context).click(function () {
        let sid = $(this).attr('sid');
        $('#improvedselect-' + sid + ' .improvedselect_all li[isgroup!=isgroup]', context).each(function () {
          let $opt = $(this);
          if ($opt.css('display') !== 'none') {
            $opt.removeClass('selected');
            improvedselectUpdateGroupVisibility($opt, 1);
            $('#improvedselect-' + sid + ' .improvedselect_sel', context).append($opt);
          }
        });
        improvedselectUpdate(sid, context);
      });

      // Remove all items.
      $('.improvedselect .del_all', context).click(function () {
        let sid = $(this).attr('sid');
        $('#improvedselect-' + sid + ' .improvedselect_sel li', context).each(function () {
          let $opt = $(this);
          $opt.removeClass('selected');
          $('#improvedselect-' + sid + ' .improvedselect_all', context).append($opt);
          improvedselectUpdateGroupVisibility($opt, 0);
        });
        // Force re-filtering.
        $('#improvedselect-' + sid + ' .improvedselect_filter', context).attr('prev', '');
        // Re-filtering will handle the rest.
        improvedselectFilter(sid, options, context);
        improvedselectUpdate(sid, context);
      });

      // Move selected items up.
      $('.improvedselect .move_up', context).click(function () {
        let sid = $(this).attr('sid');
        $('#improvedselect-' + sid + ' .improvedselect_sel .selected', context).each(function () {
          let $selected = $(this);
          // Don't move selected items past other selected items or there will
          // be problems when moving multiple items at once.
          $selected.prev(':not(.selected)').before($selected);
        });
        improvedselectUpdate(sid, context);
      });

      // Move selected items down.
      $('.improvedselect .move_down', context).click(function () {
        let sid = $(this).attr('sid');
        // Run through the selections in reverse, otherwise problems occur
        // when moving multiple items at once.
        $($('#improvedselect-' + sid + ' .improvedselect_sel .selected', context).get().reverse()).each(function () {
          let $selected = $(this);
          // Don't move selected items past other selected items or there will
          // be problems when moving multiple items at once.
          $selected.next(':not(.selected)').after($selected);
        });
        improvedselectUpdate(sid, context);
      });
      // Let other scripts know improvedSelect was initialized.
      $.event.trigger('improvedMultiSelectInitialized', [$(this)]);

      // Let other scripts know improvedSelect has been attached.
      $.event.trigger('improvedMultiSelectAttached');
    }
  };

  /**
   * Helper to remove listeners.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   */
  function remoteListeners(context) {
    $('.improvedselect_filter', context).off('input');
    $('.improvedselect .add', context).off('click');
    $('.improvedselect .del', context).off('click');
    $('.improvedselect .add_all', context).off('click');
    $('.improvedselect .del_all', context).off('click');
    $('.improvedselect .move_up', context).off('click');
    $('.improvedselect .move_down', context).off('click');
  }

  /**
   * Filter the all options list.
   *
   * @param {String} sid
   *   Select Id.
   * @param {object} options
   *   Options object.
   * @param {Element} context
   *   The context for attaching the behavior.
   */
  function improvedselectFilter(sid, options, context) {
    let $filter = $('#improvedselect-' + sid + ' .improvedselect_filter', context);
    // Get current selected group.
    let $selectedGroup = $('#improvedselect-' + sid + ' .improvedselect_tabs li.selected:not(.all) a', context);
    let text = $filter.val();
    let pattern;
    let regex;
    let words;

    if (text.length && text !== $filter.attr('prev')) {
      $filter.attr('prev', text);

      // Do not allow JavaScript regular expressions.
      if (!options.js_regex) {
        text = text.replace(/[[\]^$.\\()|?*+]/g, "\\$&").replace(/{([0-9]+,?[0-9]*)}/g, '\\{$1\\}');
      }

      switch (options.filtertype) {
        case 'partial':
        default:
          pattern = text;
          break;

        case 'exact':
          pattern = '^' + text + '$';
          break;

        case 'anywords':
          words = text.split(' ');
          pattern = '';
          for (let i = 0; i < words.length; i++) {
            if (words[i]) {
              pattern += (pattern) ? '|\\b' + words[i] + '\\b' : '\\b' + words[i] + '\\b';
            }
          }
          break;

        case 'anywords_partial':
          words = text.split(' ');
          pattern = '';
          for (let i = 0; i < words.length; i++) {
            if (words[i]) {
              pattern += (pattern) ? '|' + words[i] + '' : words[i];
            }
          }
          break;

        case 'allwords':
          words = text.split(' ');
          pattern = '^';
          // Add a lookahead for each individual word.
          // Lookahead is used because the words can match in any order
          // so this makes it simpler and faster.
          for (let i = 0; i < words.length; i++) {
            if (words[i]) {
              pattern += '(?=.*?\\b' + words[i] + '\\b)';
            }
          }
          break;

        case 'allwords_partial':
          words = text.split(' ');
          pattern = '^';
          // Add a lookahead for each individual word.
          // Lookahead is used because the words can match in any order
          // so this makes it simpler and faster.
          for (let i = 0; i < words.length; i++) {
            if (words[i]) {
              pattern += '(?=.*?' + words[i] + ')';
            }
          }
          break;
      }

      // Hide JS error if a regular expression isn't completed yet.
      try {
        regex = new RegExp(pattern, 'i');
      }
      catch (e) {
        return;
      }

      $('#improvedselect-' + sid + ' .improvedselect_all li', context).each(function () {
        let $opt = $(this);
        if ($opt.attr('isgroup') !== 'isgroup') {
          let str = $opt.text();
          if (str.match(regex) && (!$selectedGroup.length || $selectedGroup.text() === $opt.attr('group'))) {
            $opt.show();
            if ($opt.attr('group')) {
              // If a group is selected we don't need to show groups.
              if (!$selectedGroup.length) {
                $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').show();
              }
              else {
                $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').hide();
              }
            }
          }
          else {
            $opt.hide();
            if ($opt.attr('group')) {
              if ($opt.siblings('li[isgroup!="isgroup"][group="' + $opt.attr('group') + '"]:visible').length === 0) {
                $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').hide();
              }
            }
          }
        }
      });
    }
    else {
      if (!text.length) {
        $filter.attr('prev', '');
      }
      $('#improvedselect-' + sid + ' .improvedselect_all li', context).each(function () {
        let $opt = $(this);
        if ($opt.attr('isgroup') !== 'isgroup') {
          if (!$selectedGroup.length || $selectedGroup.text() === $opt.attr('group')) {
            $opt.show();
          }
          else {
            $opt.hide();
          }
          improvedselectUpdateGroupVisibility($opt, 0);
        }
      });
    }
  }

  /**
   * Contains attach logic for a select element.
   *
   * @param {String} selector
   *   jQuery selector.
   * @param {object} options
   *   Options object.
   * @param {Element} context
   *   The context for attaching the behavior.
   */
  function improvedselectAttach(selector, options, context) {
    $(selector, context).once('improvedselect').each(function () {
      let $select = $(this);
      let moveButtons = '';
      let imsSelectId = $select.attr('id');
      let $cloned_select = null;
      let regex = new RegExp('.+-cloned$', 'i');

      // Do not process cloned selects in case if options.orderable is set.
      if (imsSelectId.match(regex)) {
        return;
      }

      // Remove required attribute from select elements to allow form submission and validation on Drupal side.
      if (options.remove_required_attr) {
        $select.removeAttr('required');
      }

      if (options.orderable) {
        // If the select is orderable then we clone the original select to keep
        // opt groups.
        $cloned_select = $select.clone();
        $cloned_select.attr('id', imsSelectId + '-cloned');
        $cloned_select.attr('name', 'cloned-' + $select.attr('name'));
        $cloned_select.appendTo($select.parent()).hide();
        // Move button markup to add to the widget.
        moveButtons = '<span class="move_up" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_moveup) + '</span>' +
            '<span class="move_down" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_movedown) + '</span>';
      }

      $select.parent().append(
          '<div class="improvedselect" sid="' + imsSelectId + '" id="improvedselect-' + imsSelectId + '">' +
          '<div class="improvedselect-text-wrapper">' +
          '<input type="text" class="improvedselect_filter" sid="' + imsSelectId + '" prev="" />' +
          '</div><ul class="improvedselect_sel"></ul><ul class="improvedselect_all"></ul><div class="improvedselect_control">' +
          '<span class="add" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_add) + '</span>' +
          '<span class="del" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_del) + '</span>' +
          '<span class="add_all" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_addall) + '</span>' +
          '<span class="del_all" sid="' + imsSelectId + '">' + Drupal.checkPlain(options.buttontext_delall) + '</span>' +
          moveButtons +
          '</div><div class="clear"></div></div>');

      if ($select.find('optgroup').has('option').length > 0) {
        $select.parent().find('.improvedselect').addClass('has_group');
        // Build groups.
        $('#improvedselect-' + imsSelectId + ' .improvedselect-text-wrapper', context)
            .after('<div class="improvedselect_tabs-wrapper" sid="' + imsSelectId + '"><ul class="improvedselect_tabs"></ul></div>');
        $select.find('optgroup').has('option').each(function () {
          $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs', context)
              .append('<li><a href="">' + $(this).attr('label') + '</a></li>');
        });
        // Show all groups option.
        $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs', context)
            .prepend('<li class="all"><a href="">' + Drupal.t('All') + '</a></li>');
        // Select group.
        $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs li a', context).click(function (e) {
          let $group = $(this);
          let sid = $group.parent().parent().parent().attr('sid');
          $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs li.selected', context).removeClass('selected').find('a').unwrap();
          $group.wrap('<div>').parents('li').first().addClass('selected');

          // Any existing selections in the all list need to be unselected
          // if they aren't part of the newly selected group.
          if (!$group.hasClass('all')) {
            $('#improvedselect-' + imsSelectId + ' .improvedselect_all li.selected[group!="' + $group.text() + '"]', context).removeClass('selected');
          }

          // Clear the filter if we have to.
          if (options.groupresetfilter) {
            // Clear filter box.
            $('#improvedselect-' + imsSelectId + ' .improvedselect_filter', context).val('');
          }
          // Force re-filtering.
          $('#improvedselect-' + imsSelectId + ' .improvedselect_filter', context).attr('prev', '');
          // Re-filtering will handle the rest.
          improvedselectFilter(sid, options, context);
          e.preventDefault();
        });
        // Select all to begin.
        $('#improvedselect-' + imsSelectId + ' .improvedselect_tabs li.all a', context).click();
      }

      $select.find('option, optgroup').each(function () {
        let $opt = $(this);
        let group = '';
        if ($opt[0].tagName === 'OPTGROUP') {
          if ($opt.has('option').length) {
            $('#improvedselect-' + imsSelectId + ' .improvedselect_all', context)
                .append('<li isgroup="isgroup" so="---' + $opt.attr('label') + '---">--- ' + $opt.attr('label') + ' ---</li>');
          }
        }
        else {
          group = $opt.parent('optgroup').attr('label');
          if (group) {
            group = ' group="' + group + '"';
          }
          else {
            group = '';
          }
          if ($opt.attr('value') !== '_none') {
            if ($opt.attr('selected')) {
              $('#improvedselect-' + imsSelectId + ' .improvedselect_sel', context)
                  .append('<li so="' + $opt.attr('value') + '"' + group + '>' + $opt.html() + '</li>');
            }
            else {
              $('#improvedselect-' + imsSelectId + ' .improvedselect_all', context)
                  .append('<li so="' + $opt.attr('value') + '"' + group + '>' + $opt.html() + '</li>');
            }
          }
        }
      });

      $('#improvedselect-' + imsSelectId + ' .improvedselect_sel li, #improvedselect-' + imsSelectId + ' .improvedselect_all li[isgroup!="isgroup"]', context).click(function () {
        $(this).toggleClass('selected');
      });

      $select.hide();

      // Double click feature request.
      $('#improvedselect-' + imsSelectId + ' .improvedselect_sel li, #improvedselect-' + imsSelectId + ' .improvedselect_all li[isgroup!="isgroup"]', context).dblclick(function () {
        // Store selected items.
        let selected = $(this).parent().find('li.selected');
        let current_class = $(this).parent().attr('class');
        // Add item.
        if (current_class === 'improvedselect_all') {
          $(this).parent().find('li.selected').removeClass('selected');
          $(this).addClass('selected');
          $(this).parent().parent().find('.add').click();
        }
        // Remove item.
        else {
          $(this).parent().find('li.selected').removeClass('selected');
          $(this).addClass('selected');
          $(this).parent().parent().find('.del').click();
        }
        // Restore selected items.
        if (selected.length) {
          for (let k = 0; k < selected.length; k++) {
            if ($(selected[k]).parent().attr('class') === current_class) {
              $(selected[k]).addClass('selected');
            }
          }
        }
      });

      // Set the height of the select fields based on the height of the
      // parent, otherwise it can end up with a lot of wasted space.
      $('.improvedselect_sel, .improvedselect_all').each(function () {
        if ($(this).parent().height() > 0) {
          $(this).height($(this).parent().height() - 35);
        }
        // @todo: Element is hidden - we can't detect its height.
      });
    });
  }

  /**
   * Update the visibility of an option's group.
   *
   * @param {jQuery} $opt
   *   A jQuery object of a select option.
   * @param {Number} numItems
   *   How many items should be considered an empty group. Generally zero or one
   *   depending on if an item has been or is going to be removed or added.
   */
  function improvedselectUpdateGroupVisibility($opt, numItems) {
    let $selectedGroup = $opt.parents('.improvedselect').first().find('.improvedselect_tabs li.selected:not(.all) a');

    // Don't show groups if a group is selected.
    if ($opt.parent().children('li[isgroup!="isgroup"][group="' + $opt.attr('group') + '"]:visible').length <= numItems || $selectedGroup.length) {
      $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').hide();
    }
    else {
      $opt.siblings('li[isgroup="isgroup"][so="---' + $opt.attr('group') + '---"]').show();
    }
  }

  /**
   * Updates the select values by its id.
   *
   * @param {string} sid
   *   Select Id.
   * @param {Element} context
   *   The context for attaching the behavior.
   */
  function improvedselectUpdate(sid, context) {
    // If we have sorting enabled, make sure we have the results sorted.
    let $select = $('#' + sid);
    let $cloned_select = $('#' + sid + '-cloned');

    if ($cloned_select.length) {
      $select.find('option, optgroup').remove();
      $cloned_select.find('option:selected').prop('selected', false);
      $('#improvedselect-' + sid + ' .improvedselect_sel li', context).each(function () {
        let $li = $(this);
        $select.append($('<option></option>').attr('value', $li.attr('so')).prop('selected', true).text($li.text()));
        $('#' + sid + '-cloned [value="' + $(this).attr('so') + '"]', context).prop('selected', true);
      });
    }
    else {
      $select.find('option:selected').prop('selected', false);
      $('#improvedselect-' + sid + ' .improvedselect_sel li', context).each(function () {
        $('#' + sid + ' [value="' + $(this).attr('so') + '"]', context).prop('selected', true);
      });
    }

    $select.find('option, optgroup').each(function () {
      let $opt = $(this);
      if ($opt[0].tagName === 'OPTGROUP') {
        if ($opt.has('option').length) {
          $('#improvedselect-' + sid + ' .improvedselect_all', context).append($('#improvedselect-' + sid + ' .improvedselect_all [so="---' + $opt.attr('label') + '---"]', context));
        }
      }
      else {
        // When using reordering, the options will be from the cloned select,
        // meaning that there will be none selected, which means that items
        // in the selected list will not be reordered, which is what we want.
        if ($opt.attr('selected')) {
          $('#improvedselect-' + sid + ' .improvedselect_sel', context).append($('#improvedselect-' + sid + ' .improvedselect_sel [so="' + $opt.attr('value') + '"]', context));
        }
        else {
          $('#improvedselect-' + sid + ' .improvedselect_all', context).append($('#improvedselect-' + sid + ' .improvedselect_all [so="' + $opt.attr('value') + '"]', context));
        }
      }
    });
    // Don't use the $select variable here as it might be the clone.
    // Tell the ajax system the select has changed.
    $('#' + sid, context).trigger('change');
  }

})(jQuery, Drupal);
;
/**
 * @file
 * The Lazy-load behavior.
 */

(function (Drupal) {

  'use strict';

  Drupal.behaviors.lazy = {
    attach: function (context, settings) {
      var utils = {
        extend: function (obj, src) {
          Object.keys(src).forEach(function (key) {
            obj[key] = src[key];
          });
          return obj;
        },
        once: function (selector, context) {
          return (context || document).querySelector(selector);
        },
        loadScript: function (url) {
          if (document.querySelectorAll('script[src="' + url + '"]').length == 0) {
            var script = document.createElement('script'),
              scripts = document.getElementsByTagName('script')[0];
            script.src = url;
            script.async = true;
            scripts.parentNode.insertBefore(script, scripts);
          }
        }
      };

      if (utils.once('body', context)) {
        var lazysizes = settings.lazy.lazysizes || {};

        if (!settings.lazy.preferNative) {
          // 1. Lazysizes configuration.
          window.lazySizesConfig = window.lazySizesConfig || {};
          window.lazySizesConfig = utils.extend(window.lazySizesConfig, lazysizes);
          // 2. Load all selected lazysizes plugins.
          if (!Object.entries) {
            Object.entries = function (obj) {
              var ownProps = Object.keys(obj),
                i = ownProps.length,
                resArray = new Array(i);
              while (i--) {
                resArray[i] = [ownProps[i], obj[ownProps[i]]];
              }
              return resArray;
            };
          }
          var min = settings.lazy.minified ? '.min' : '';
          Object.entries(lazysizes.plugins).forEach(function (path) {
            utils.loadScript(settings.lazy.libraryPath + '/plugins/' + path[1] + min + '.js');
          });
          // 3. Load the lazysizes library.
          utils.loadScript(settings.lazy.libraryPath + '/lazysizes' + min + '.js');
        }
      }
    }
  };

})(Drupal);
;
/**
 * @file
 * JS to add the event listener to create the active lang cookie using the lang switcher.
 */

document.addEventListener('click', function (e) {
  if (!e.target.matches('.language-link')) return;

  setCookieViaSwitcher("SESSvl", e.target.hreflang, 365);
}, false);

function setCookieViaSwitcher(cname, cvalue, exdays = 0) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = exdays ? "; expires=" + d.toUTCString() : '';
  var cookieString = cname + "=" + cvalue + expires + "; path=/; domain=.matterport.com; SameSite=Lax;";
  document.cookie = cookieString;
}
;
(function ($) {
  Drupal.behaviors.search_keys = {
    attach: function (context, settings) {
      $("input[id^='edit-keys--'],input[id^='edit-keywords--'],input[id^='edit-submit-search--']").each(function(index) {
        var $inputid = $(this).attr('id');
        $(this).prev('label').attr("for", $inputid);
      });
    }
  }
})(jQuery);
;
try {
    window.addEventListener("message", (event) => {
        if (event && event.data && event.data["cslocator"]) {
            var msg = event.data["cslocator"];          
            var elm = document.getElementsByClassName('block--block__block_content__cfe2f893_847c_48a4_aa78_18fefc087f0e')[0];
            
            if (msg === 'expand') {
                elm.classList.add('expanded');
            } else {
                elm.classList.remove('expanded');
            }
      }
    }, false);
} catch (e) {
    //fail silently
}
;
