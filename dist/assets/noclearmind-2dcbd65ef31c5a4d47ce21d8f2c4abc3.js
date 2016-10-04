"use strict";define("noclearmind/app",["exports","ember","noclearmind/resolver","ember-load-initializers","noclearmind/config/environment"],function(e,n,i,a,t){var r=void 0;n.default.MODEL_FACTORY_INJECTIONS=!0,r=n.default.Application.extend({modulePrefix:t.default.modulePrefix,podModulePrefix:t.default.podModulePrefix,Resolver:i.default}),(0,a.default)(r,t.default.modulePrefix),e.default=r}),define("noclearmind/components/app-version",["exports","ember-cli-app-version/components/app-version","noclearmind/config/environment"],function(e,n,i){var a=i.default.APP.name,t=i.default.APP.version;e.default=n.default.extend({version:t,name:a})}),define("noclearmind/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,n){e.default=n.default}),define("noclearmind/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,n){e.default=n.default}),define("noclearmind/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","noclearmind/config/environment"],function(e,n,i){e.default={name:"App Version",initialize:(0,n.default)(i.default.APP.name,i.default.APP.version)}}),define("noclearmind/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,n){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",n.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("noclearmind/initializers/data-adapter",["exports","ember"],function(e,n){e.default={name:"data-adapter",before:"store",initialize:n.default.K}}),define("noclearmind/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,n,i){e.default={name:"ember-data",initialize:n.default}}),define("noclearmind/initializers/export-application-global",["exports","ember","noclearmind/config/environment"],function(e,n,i){function a(){var e=arguments[1]||arguments[0];if(i.default.exportApplicationGlobal!==!1){var a,t=i.default.exportApplicationGlobal;a="string"==typeof t?t:n.default.String.classify(i.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("noclearmind/initializers/injectStore",["exports","ember"],function(e,n){e.default={name:"injectStore",before:"store",initialize:n.default.K}}),define("noclearmind/initializers/store",["exports","ember"],function(e,n){e.default={name:"store",after:"ember-data",initialize:n.default.K}}),define("noclearmind/initializers/transforms",["exports","ember"],function(e,n){e.default={name:"transforms",before:"store",initialize:n.default.K}}),define("noclearmind/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,n){e.default={name:"ember-data",initialize:n.default}}),define("noclearmind/resolver",["exports","ember-resolver"],function(e,n){e.default=n.default}),define("noclearmind/router",["exports","ember","noclearmind/config/environment"],function(e,n,i){var a=n.default.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL});a.map(function(){}),e.default=a}),define("noclearmind/services/ajax",["exports","ember-ajax/services/ajax"],function(e,n){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return n.default}})}),define("noclearmind/config/environment",["ember"],function(e){var n="noclearmind";try{var i=n+"/config/environment",a=document.querySelector('meta[name="'+i+'"]').getAttribute("content"),t=JSON.parse(unescape(a)),r={default:t};return Object.defineProperty(r,"__esModule",{value:!0}),r}catch(e){throw new Error('Could not read config from meta tag with name "'+i+'".')}}),runningTests||require("noclearmind/app").default.create({name:"noclearmind",version:"0.0.0+b5408d2a"});