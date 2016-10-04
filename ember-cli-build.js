/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-bootstrap-sassy': {
      'quiet': true,
      'glyphicons': false
    },
  });

  /*
    Fonts imports
  */
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', { destDir: 'fonts' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', { destDir: 'fonts' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', { destDir: 'fonts' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', { destDir: 'fonts' });
  app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', { destDir: 'fonts' });
  app.import('bower_components/font-awesome/fonts/FontAwesome.otf', { destDir: 'fonts' });

  /*
    Stylesheets imports
  */
  // From bower
  app.import('bower_components/font-awesome/css/font-awesome.min.css');
  app.import('bower_components/animate.css/animate.min.css');

  
  app.import('bower_components/jquery-easing/jquery.easing.min.js');

  return app.toTree();
};
