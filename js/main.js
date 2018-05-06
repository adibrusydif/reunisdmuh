/*
  Template Name : Reactia
  Author: Harry
  Create Date: 05/10/2014
  Version: v1.0
*/

/* ------------------------------------------------------------------------------
 This is jquery module for main page
 ------------------------------------------------------------------------------ */

 /* Global constants */
 document.getElementsByTagName('html')[0].removeAttribute("style")
 /*global jQuery */
 jQuery(function ($) {
  'use strict';

  /**
  * Subscription Form Application
  */
  var App = {
    $options: {},
    $loader: $(".loader"),
    $animationload: $(".animationload"),
    $countdown: $('#countdown_dashboard'),

    bindEvents: function() {
      //binding events
      $(window).on('load', this.load.bind(this));
      $(document).on('ready', this.docReady.bind(this));
    },
    load: function() {
      /* ==============================================
      1.Page Preloader
      =============================================== */
      this.$loader.delay(300).fadeOut();
      this.$animationload.delay(600).fadeOut("slow");
    },
    docReady: function() {
      /* -----------------------------------------------------------------------
        Countdown
        ----------------------------------------------------------------------- */
        this.$countdown.countDown({
          targetDate: {
            'day':    21,
            'month':  6,
            'year':   2018,
            'hour':   10,
            'min':    10,
            'sec':    10
          },
          omitWeeks: true
        });

      /* ==============================================
      NiceScroll
      =============================================== */
      $("html").niceScroll({
        scrollspeed: 50,
        mousescrollstep: 38,
        cursorwidth: 7,
        cursorborder: 0,
        autohidemode: true,
        zindex: 9999999,
        horizrailenabled: false,
        cursorborderradius: 0
      });

      /* ==============================================
      Parallax
      =============================================== */
      $(window).stellar({
        horizontalScrolling: false,
        responsive: true,
        scrollProperty: 'scroll',
        parallaxElements: false,
        horizontalOffset: 0,
        verticalOffset: 0
      });
    },
    init: function (_options) {
      $.extend(this.$options, _options);
      this.bindEvents();
      document.getElementsByTagName('html')[0].removeAttribute("style")
    }
  }
  //Initializing the app
  //passing the countdown date
  App.init({day: 18, month: 2, year: 2018, hour: 11, min: 59, sec: 59});
});
document.getElementsByTagName('html')[0].removeAttribute("style")
