// Generated by CoffeeScript 1.3.1
(function() {

  require.config({
    baseURL: 'js',
    paths: {
      'jquery': '../libs/jquery/jquery',
      'underscore': '../libs/underscore-amd/underscore',
      'backbone': '../libs/backbone-amd/backbone',
      'marionette': '../libs/backbone.marionette/lib/backbone.marionette',
      'tpl': '../libs/requirejs-tpl/tpl'
    },
    shim: {
      jquery: {
        exports: 'jQuery'
      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      marionette: {
        deps: ['jquery', 'underscore', 'backbone'],
        exports: 'Marionette'
      }
    }
  });

  require(["app", "./modules/page/page"], function(App, Page) {
    return App.start();
  });

}).call(this);
