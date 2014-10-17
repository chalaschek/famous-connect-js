/* globals define */
define(function(require, exports, module) {
  'use strict';


  var Surface           = require('famous/core/Surface');

  function SlideContent(options) {
      Surface.apply(this, arguments);
      this._superDeploy = Surface.prototype.deploy
  }

  SlideContent.prototype = Object.create(Surface.prototype);
  SlideContent.prototype.constructor = SlideContent;

  SlideContent.prototype.deploy = function deploy(target) {
    this._superDeploy(target);
    var size    = this.getSize();
    
    var width   = size[0] == true ? target.innerWidth  : size[0] ;
    var height  = size[1] == true ? target.innerHeight : size[1] ;

    this.emit('target.size', { height: target.offsetHeight, width: target.offsetWidth});
  };

  module.exports = SlideContent;

});