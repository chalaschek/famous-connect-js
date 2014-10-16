/* globals define */
define(function(require, exports, module) {
  'use strict';

  var Surface = require("famous/core/Surface");
  var ImageSurface = require("famous/surfaces/ImageSurface");

  var logo = new ImageSurface({
    size: [200, 200],
    content: '/content/images/famous_logo_white.png',
    classes: ['double-sided']
  });

  module.exports = logo;
});