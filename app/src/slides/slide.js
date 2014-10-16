/* globals define */
define(function(require, exports, module) {
  'use strict';
  // import dependencies
  var Engine            = require('famous/core/Engine');
  var Surface           = require('famous/core/Surface');
  var Modifier     = require('famous/core/Modifier');
  var StateModifier     = require('famous/modifiers/StateModifier');
  var Transform = require('famous/core/Transform');
  var View = require('famous/core/View');
  var Easing = require('famous/transitions/Easing');
  var StateModifier = require('famous/modifiers/StateModifier');

  var Utils = require('../utils');

  var rot = 179;

  function Slide(options) {

    View.apply(this, arguments);

    options = options || {};

    this.content = options.content;
    this.classList = options.classList;
    this.backgroundClassList = options.backgroundClassList;

    this.background = new Surface({
      classes: this.backgroundClassList
    });

    this.background.state = new StateModifier({
      transform: Transform.translate(0,0,10)
    });

    this.contentView = new View();
    this.contentView.state = new Modifier({
      transform: Transform.translate(0,0,20),
      // origin: [0.5, 0.5],
      // align: [0.5, 0.5],
      // // size: [window.innerWidth * 0.5, window.innerHeight * 0.5]
      // size: [window.innerWidth * 1, window.innerHeight * 1]
    });

    // Engine.on('resize', function(){
    //   console.log(this.contentView.getSize());
    //   this.contentView.state.setSize([window.innerWidth * 0.5, window.innerHeight * 0.5]);
    //   console.log( (window.innerWidth * 0.5) + "  " + (window.innerHeight * 0.5));
    // }.bind(this));

    this.setContent(this.content);

    this.topMod = new StateModifier({
      origin: [0.5,0.5],
      align: [0.5,0.5]
    });

    var top = this.add(this.topMod);
    top.add(this.background.state).add(this.background);
    top.add(this.contentView.state).add(this.contentView);

  }

  Slide.prototype = Object.create(View.prototype);

  Slide.prototype.constructor = Slide;


  Slide.prototype.setContent = function setContent(viewContent) {

    var content;
    if(viewContent && typeof viewContent != "string"){
      content = viewContent;
    }else{
      var options = _.extend({}, this.contentConfig || {}, {
        content: viewContent,
        classes: this.classList,
        // size: [true, true]
      });
      content = new Surface(options);
    }

    this.contentView.add(content);
  };

  Slide.prototype.show = function(forward, callback){
    callback = callback || function(){};

    this.topMod.setTransform(
      Transform.rotateY(Utils.degToRadians(forward ? -rot : rot)),
      { duration : 0, curve: Easing.outBack }
    );

    this.topMod.setOpacity(
      1,
      { duration : 200 }
    );
    
    this.topMod.setTransform(
      Transform.rotateY(Utils.degToRadians(0)),
      { duration : 800, curve: Easing.outBack },
      callback
    );
  }


  Slide.prototype.hide = function(forward, callback){
    callback = callback || function(){};

    this.topMod.setOpacity(
      0,
      { duration : 400 }
    );

    this.topMod.setTransform(
      Transform.rotateY(Utils.degToRadians(forward ? rot : -rot)),
      { duration : 800, curve: Easing.outBack },
      callback
    );
  }

  Slide.prototype.opacity = function(val){
    this.topMod.setOpacity(val);
  }

  Slide.prototype.config = function(options){
    this.number = options.number;
    this.next = options.next;
    this.router = options.router;
  }

  Slide.prototype.forward = function(){
    if(this.next) this.router.navigate('/' + (this.number+1), {trigger:true});
  }

  Slide.prototype.backward = function(){
    if(this.number > 1) this.router.navigate('/' + (this.number - 1), {trigger:true});
  }


  module.exports = Slide;
});
