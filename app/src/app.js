/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Backbone = require('backbone');
  var _ = require('underscore');
  var Slide = require('./slides/slide');
  var slides = require('./slides/config');

  Backbone.sync = function(method, model, success, error) {
    success();
  };


  function initialize(options){
    this.slides = {};
    this.mainContext = Engine.createContext();
    this.mainContext.setPerspective(10000);

    this.mainContext.on('resize', function(){
      _.values(this.slides).forEach(function(slide){
        slide.setPresentationSize(this.mainContext.getSize() );
      }.bind(this));
    }.bind(this))

    this.initEvents();

  }


  // Holds information about the currently ongoing touch input
  var touch = {
      startX: 0,
      startY: 0,
      startSpan: 0,
      startCount: 0,
      captured: false,
      threshold: 40
    };

  function initEvents(){

    Engine.on('keydown', function(e) {
      if(!this._visibileSlide) return;
      if (e.which === 39) this._visibileSlide.forward();
      else if (e.which === 37) this._visibileSlide.backward();
    }.bind(this));

    Engine.on('mouseup', function(e) {
      if(e && e.target.localName == 'a') return;
      if(!this._visibileSlide) return;
      this._visibileSlide.forward();
    }.bind(this));

    window.addEventListener( 'touchstart', function(){
      onTouchStart.apply(this, arguments);
    }.bind(this), false );
    window.addEventListener( 'touchmove', function(){
      onTouchMove.apply(this, arguments);
    }.bind(this), false );
    window.addEventListener( 'touchend', function(){
      onTouchEnd.apply(this, arguments);
    }.bind(this), false );
  }



  /**
   * Handler for the 'touchstart' event, enables support for
   * swipe and pinch gestures.
   */
  function onTouchStart( event ) {
    touch.startX = event.touches[0].clientX;
    touch.startY = event.touches[0].clientY;
    touch.startCount = event.touches.length;
  }

  /**
   * Handler for the 'touchmove' event.
   */
  function onTouchMove( event ) {

    // Each touch should only trigger one action
    if( !touch.captured ) {
      var currentX = event.touches[0].clientX;
      var currentY = event.touches[0].clientY;

      // There was only one touch point, look for a swipe
      if( event.touches.length === 1 && touch.startCount !== 2 ) {

        var deltaX = currentX - touch.startX,
          deltaY = currentY - touch.startY;

        if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
          touch.captured = true;
          if(!this._visibileSlide) return;
          this._visibileSlide.backward();
        }
        else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
          touch.captured = true;
          if(!this._visibileSlide) return;
          this._visibileSlide.forward();
        }
        event.preventDefault();
      }
    }
    // There's a bug with swiping on some Android devices unless
    // the default action is always prevented
    else if( navigator.userAgent.match( /android/gi ) ) {
      event.preventDefault();
    }

  }

  /**
   * Handler for the 'touchend' event.
   */
  function onTouchEnd( event ) {
    touch.captured = false;
  }




  function slide(){
    var path = window.location.hash || "";
    var num = path.substring(1) || 1;
    num = parseInt(num);

    if(num > slides.length) return this.navigate('/' + (num-1), {trigger:false});

    var slide = this.fetchSlide(num);

    if(!slide){
      slide = this.loadSlide(num);
    }
    this.showSlide(slide);
  }



  function fetchSlide(number){
    return this.slides[number-1];
  }



  function loadSlide(number){
    var config = slides[number-1] || {};
    config.presentationSize = this.mainContext.getSize();

    var slide = new Slide(config);
    this.slides[number-1] = slide;
    slide.config({
      number: number,
      next: true,
      router: this
    });
    slide.opacity(0);
    this.mainContext.add(slide);
    return slide;
  }



  function showSlide(slide) {
    var forward = this._visibileSlide && this._visibileSlide.number > slide.number ? false : true;
    function _show(){
      this._visibileSlide = slide;
      slide.show( forward );
    }
    if(this._visibileSlide) return this._visibileSlide.hide(forward, _show.call(this));
    _show.call(this);
  }



  function start(){
    Backbone.history.start({
     pushState: false
    });
  }



  var App = Backbone.Router.extend({
    routes: {
      '*path' : 'slide'
    },
    initialize: initialize,
    slide: slide,
    fetchSlide: fetchSlide,
    loadSlide: loadSlide,
    showSlide: showSlide,
    start: start,
    initEvents: initEvents
  });


  module.exports = App;

});
