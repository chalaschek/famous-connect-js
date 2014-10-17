/* globals define */
define(function(require, exports, module) {
  'use strict';

  var slides = [

    {
      classList: ['title'],
      content: require('text!./title.html')
    },

    {
      classList: ['map', 'center'],
      content: '<img src="/content/images/map.png"/>'
    },

    {
      classList: ['timeline', 'center'],
      content: '<img src="/content/images/timeline.png"/>'
    },

    {
      classList: ['iframe', 'center'],
      content: '<iframe src="//player.vimeo.com/video/86664858?autoplay=1" width="800" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    },

    {
      classList: ['iframe', 'center'],
      content: '<iframe height="800" width="800" src="http://www.complex.com/2014-fifa-world-cup-guide/" frameborder="0"></iframe>'
    },

    {
      classList: ['why']
    },

    {
      classList: ['go-fast', 'center'],
      content: require('text!./go-fast.html')
    },

    {
      classList: ['smooth', 'center'],
      content: require('text!./smooth.html')
    },

    {
      classList: ['what-to-do', 'center'],
      content: require('text!./what-to-do.html')
    },

    {
      classList: ['hell']
    },

    {
      content: require('./famous')
    },

    {
      classList: ['periodic', 'center', 'iframe'],
      content: '<iframe height="800" width="800" src="http://periodic.famo.us/" frameborder="0"></iframe>'
    },

    {
      classList: ['famous-what', 'center'],
      content: require('text!./famous-what-2.html')
    },

    {
      classList: ['famous-hype']
    },

    {
      classList: ['famous-what', 'center'],
      // backgroundClassList: ['gold-background'],
      content: require('text!./famous-what.html')
    },


    {
      classList: ['famous-aha', 'center'],
      // backgroundClassList: ['gold-background'],
      content: require('text!./famous-aha.html')

    },

    {
      classList: ['famous-aha', 'famous-aha-2', 'center'],
      // backgroundClassList: ['gold-background'],
      content: require('text!./famous-aha-2.html')

    },

    {
      classList: ['single', 'center'],
      // backgroundClassList: ['blue-background'],
      content: '<h1>Fundamentals</h1>'
    },
    {
      classList: ['single', 'center'],
      // backgroundClassList: ['blue-background'],
      content: '<h1>Forget about DOM</h1>'
    },

    {
      classList: ['single', 'center'],
      // backgroundClassList: ['blue-background'],
      content: '<h1>Render Tree</h1>'
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./context.html')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./surfaces.html')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./modifiers.html')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./tree-branches.html')
    },

    {
      content: require('./example-square')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./transforms.html')
    },

    {
      content: require('./example-square-translate')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./rotations.html')
    },

    {
      content: require('./example-square-rotating')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./transform-curves.html')
    },

    {
      content: require('./example-square-curve')
    },

    {
      classList: ['code-tree', 'center', 'text-dark'],
      backgroundClassList: ['blue-background'],
      content: require('text!./physics.html')
    },

    {
      content: require('./example-physics')
    },

    {
      classList: ['views', 'center'],
      // backgroundClassList: ['blue-background'],
      content: require('text!./views.html')
    },

    {
      content: require('./example-cube')
    },

    {
      classList: ['famous-more', 'center'],
      // backgroundClassList: ['blue-background'],
      content: require('text!./famous-more.html')
    },

    {
      classList: ['frameworks']
    },

    {
      classList: ['so-what', 'center']
    },

    {
      classList: ['iframe', 'center'],
      content: require('text!./tunnel.html')
    },

    {
      classList: ['iframe', 'center'],
      content: require('text!./tentacles.html')
    },

    {
      classList: ['iframe', 'center'],
      content: '<iframe src="//player.vimeo.com/video/86664858?autoplay=1" width="800" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    },

    {
      classList: ['iframe', 'center'],
      content: '<iframe height="800" width="800" src="http://www.complex.com/2014-fifa-world-cup-guide/" frameborder="0"></iframe>'
    },

    {
      classList: ['when', 'center'],
      // backgroundClassList: ['blue-background'],
      content: require('text!./when.html')
    },

    {
      classList: ['caution', 'center'],
      // backgroundClassList: ['red-background'],
      content: require('text!./caution.html')
    },

    {
      classList: ['resources', 'center'],
      // backgroundClassList: ['blue-background'],
      content: require('text!./resources.html')
    },

    {
      classList: ['center'],
      content: '<img src="/content/images/crystal-ball.jpg"/>'
    },

    {
      classList: ['title', 'final'],
      content: require('text!./final.html')
    }

  ];

  module.exports = slides;

});