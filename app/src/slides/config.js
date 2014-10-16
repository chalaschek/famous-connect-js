/* globals define */
define(function(require, exports, module) {
  'use strict';

  var slides = [

    {
      classList: ['title', 'black-background'],
      content: require('text!./title.html')
    },

    {
      classList: ['web-is-dead', 'center'],
      content: require('text!./web-is-dead.html')

    },

    {
      classList: ['facebook-abandons-html5'],
    },

    {
      classList: ['flashback', 'center'],
      content: '<img src="/content/images/flashback.jpg"/>'
    },

    {
      classList: ['timeline', 'center'],
      content: '<img src="/content/images/timeline.png"/>'
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
      classList: ['what-to-do', 'center', 'blue-background'],
      content: require('text!./what-to-do.html')
    },

    {
      content: require('./famous')
    },

    {
      classList: ['famous-what', 'center'],
      content: require('text!./famous-what.html')
    },

    {
      classList: ['periodic', 'center'],
      content: require('text!./periodic.html')
    },

    {
      classList: ['famous-what', 'center'],
      content: require('text!./famous-what-2.html')
    },

    {
      classList: ['famous-hype']
    },

    {
      classList: ['famous-aha', 'center', 'gold-background'],
      content: require('text!./famous-aha.html')

    },

    {
      classList: ['famous-aha', 'center', 'gold-background'],
      content: require('text!./famous-aha-2.html')

    },

    {
      classList: ['single', 'center', 'black-background'],
      content: '<h1>Fundamentals</h1>'
    },
    {
      classList: ['single', 'center', 'black-background'],
      content: '<h1>Forget about DOM</h1>'
    },

    {
      classList: ['single', 'center', 'black-background'],
      content: '<h1>Render Tree</h1>'
    },

    {
      classList: ['code-tree', 'center', 'blue-background'],
      content: require('text!./context.html')
    },

    {
      classList: ['code-tree', 'center', 'blue-background'],
      content: require('text!./surfaces.html')
    },

    {
      classList: ['code-tree', 'center', 'blue-background'],
      content: require('text!./modifiers.html')
    },

    {
      content: require('./example-logo')
    }

  ];

  module.exports = slides;

});