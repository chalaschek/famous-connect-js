/* globals define */
define(function(require, exports, module) {
  'use strict';

  // import dependencies
  var Engine = require('famous/core/Engine');
  var Backbone = require('backbone');
  var Slide = require('./slides/slide');
  var slides = require('./slides/config');

  Backbone.sync = function(method, model, success, error) {
    success();
  };


  function initialize(options){
    this.slides = {};
    this.mainContext = Engine.createContext();
    this.mainContext.setPerspective(10000);

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
    start: start
  });


  module.exports = App;

});
