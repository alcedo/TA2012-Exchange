/* Plugins.js is meant to hold all of a site's plugin code. Instead of linking to many different files, we can improve performance by including plugin code directly in this one file. There can and should be exceptions to this usage. An extremely large plugin only used on one rarely visited page, for example, might be better off in a separate download, only accessed on the target page. Most of the time, however, it’s safe to just paste in minified versions of all your plugins here for easy access.*/ 


// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// Insert code ......

// place any jQuery/helper plugins in here, below this line - instead of separate, slower script files.

/* PLUGIN DIRECTORY
What you can find in this file [listed in order they appear]

       1.) Animate Background Position - plugins.jquery.com/project/backgroundPosition-Effect
       2.) jQuery Easing Plugin - gsgd.co.uk/sandbox/jquery/easing/

*/

/**
* 1.) Animate Background Position - plugins.jquery.com/project/backgroundPosition-Effect
* @author Alexander Farkas
* v. 1.21
*/
(function($) {
   if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8
   //SNIPPED
   };
})(jQuery);


/**
* 2.) jQuery Easing Plugin (we're not using jQuery UI as of yet) - gsgd.co.uk/sandbox/jquery/easing/
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing, {
   //SNIPPED

});
;(function($) {
   $.fn.ajaxSubmit = function(options) {
   //SNIPPED
   }
})(jQuery);
