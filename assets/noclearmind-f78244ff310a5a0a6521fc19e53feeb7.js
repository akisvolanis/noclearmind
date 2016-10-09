"use strict";define("noclearmind/app",["exports","ember","noclearmind/resolver","ember-load-initializers","noclearmind/config/environment"],function(e,t,n,a,r){var d=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({rootElement:"#noclearmind",modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(d,r.default.modulePrefix),e.default=d}),define("noclearmind/components/app-version",["exports","ember-cli-app-version/components/app-version","noclearmind/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("noclearmind/components/goto-btn",["exports","ember"],function(e,t){e.default=t.default.Component.extend({classNames:["goto-btn-component"],tagName:"a",attribeNameBindings:["href"],href:"",onDidInsertElement:t.default.on("didInsertElement",function(){}),click:function(){var e=t.default.$(this.get("href")),n=e.offset().top?e.offset().top:0;t.default.$("html, body").stop().animate({scrollTop:n},1500,"easeInOutExpo")}})}),define("noclearmind/components/ncm-init",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"",onDidInsertElement:t.default.on("didInsertElement",function(){t.default.run.scheduleOnce("afterRender",this,function(){t.default.$("body").scrollspy({target:".navbar-fixed-top"}),this.collapseNavbar(),t.default.$(window).scroll(this.collapseNavbar)}),t.default.run.later(this,function(){t.default.$(".brand-heading").addClass("show")},1e3)}),collapseNavbar:function(){$(".navbar").offset().top>50?($(".navbar-fixed-top .navbar-brand").removeClass("hidden"),$(".navbar-fixed-top").addClass("top-nav-collapse")):($(".navbar-fixed-top .navbar-brand").addClass("hidden"),$(".navbar-fixed-top").removeClass("top-nav-collapse"))}})}),define("noclearmind/controllers/main",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({config:t.default.inject.service()})}),define("noclearmind/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("noclearmind/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("noclearmind/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","noclearmind/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("noclearmind/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("noclearmind/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("noclearmind/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("noclearmind/initializers/export-application-global",["exports","ember","noclearmind/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("noclearmind/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("noclearmind/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("noclearmind/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("noclearmind/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("noclearmind/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("noclearmind/router",["exports","ember","noclearmind/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){this.route("main",{path:"/test"}),this.route("comingsoon",{path:"/"})}),e.default=a}),define("noclearmind/routes/comingsoon",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("noclearmind/routes/main",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("noclearmind/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("noclearmind/services/config",["exports","ember-config-service/services/config"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("noclearmind/templates/comingsoon",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:14,column:10}},moduleName:"noclearmind/templates/comingsoon.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("style"),a=e.createTextNode("\n  body { text-align: center; padding: 150px; }\n  h1 { font-size: 50px; }\n  body { font: 20px Helvetica, sans-serif; color: #333; background: #F3F3F3}\n  article { display: block; text-align: left; width: 650px; margin: 0 auto; }\n  a { color: #dc8100; text-decoration: none; }\n  a:hover { color: #333; text-decoration: none; }\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("article"),a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h1"),r=e.createTextNode("Coming soon!");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("p"),d=e.createTextNode("- noclearmind.com");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("noclearmind/templates/components/goto-btn",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"noclearmind/templates/components/goto-btn.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","yield",["loc",[null,[1,0],[1,9]]],0,0,0,0]],locals:[],templates:[]}}())}),define("noclearmind/templates/components/ncm-init",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"noclearmind/templates/components/ncm-init.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","yield",["loc",[null,[1,0],[1,9]]],0,0,0,0]],locals:[],templates:[]}}())}),define("noclearmind/templates/main",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:9,column:14},end:{line:9,column:81}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("no clear mind");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:17,column:20},end:{line:17,column:57}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("home");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:51,column:6},end:{line:53,column:6}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("i");e.setAttribute(n,"class","fa fa-angle-double-down"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:135,column:0}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment(" Navigation ");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("nav");e.setAttribute(n,"class","navbar navbar-custom navbar-fixed-top"),e.setAttribute(n,"role","navigation");var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","container");var r=e.createTextNode("\n          ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createElement("button");e.setAttribute(d,"type","button"),e.setAttribute(d,"class","navbar-toggle"),e.setAttribute(d,"data-toggle","collapse"),e.setAttribute(d,"data-target",".navbar-main-collapse");var i=e.createTextNode("\n                  Menu ");e.appendChild(d,i);var i=e.createElement("i");e.setAttribute(i,"class","fa fa-bars"),e.appendChild(d,i);var i=e.createTextNode("\n              ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n\n          ");e.appendChild(a,r);var r=e.createComment(" Collect the nav links, forms, and other content for toggling ");e.appendChild(a,r);var r=e.createTextNode("\n          ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","collapse navbar-collapse navbar-right navbar-main-collapse");var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createElement("ul");e.setAttribute(d,"class","nav navbar-nav");var i=e.createTextNode("\n                  ");e.appendChild(d,i);var i=e.createComment(" Hidden li included to remove active class from about link when scrolled up past about section ");e.appendChild(d,i);var i=e.createTextNode("\n                  ");e.appendChild(d,i);var i=e.createElement("li");e.setAttribute(i,"class","hidden");var l=e.createTextNode("\n                    ");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n                  ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createTextNode("              ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n          ");e.appendChild(a,r);var r=e.createComment(" /.navbar-collapse ");e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createComment(" /.container ");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n  ");e.appendChild(t,n);var n=e.createComment(" Intro Header ");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("header");e.setAttribute(n,"class","intro");var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","intro-body");var r=e.createTextNode("\n          ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","container");var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","row");var i=e.createTextNode("\n                  ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","col-xs-12");var l=e.createTextNode("\n                      ");e.appendChild(i,l);var l=e.createElement("h1");e.setAttribute(l,"class","brand-heading animated fadeIn");var o=e.createTextNode("no clear mind");e.appendChild(l,o),e.appendChild(i,l);var l=e.createTextNode("\n                      ");e.appendChild(i,l);var l=e.createElement("p");e.setAttribute(l,"class","intro-text"),e.appendChild(i,l);var l=e.createTextNode("\n                      \n                  ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n              ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n  ");e.appendChild(t,n);var n=e.createComment(" About Section ");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("section");e.setAttribute(n,"id","about"),e.setAttribute(n,"class","container content-section text-justify");var a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n          ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-lg-10 col-lg-offset-1");var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("No Clear Mind is a two piece project originally from Athens, Greece. In the last five years they have been engaged with a variety of music genres and have released two full length albums, toured different countries in Europe and gained followers from all around the world.");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n  ");e.appendChild(t,n);var n=e.createComment(" releases Section ");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment(" photos Section ");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createComment(" Contact Section ");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createTextNode("\n\n  ");e.appendChild(t,n);var n=e.createComment(" Footer ");e.appendChild(t,n);var n=e.createTextNode("\n  ");e.appendChild(t,n);var n=e.createElement("footer"),a=e.createTextNode("\n      ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","container text-center");var r=e.createTextNode("\n          ");e.appendChild(a,r);var r=e.createElement("p"),d=e.createTextNode("Copyright © noclearmind.com 2016. Design by Akis.");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[4,1]),r=new Array(4);return r[0]=e.createMorphAt(t,0,0,n),r[1]=e.createMorphAt(e.childAt(a,[1]),3,3),r[2]=e.createMorphAt(e.childAt(a,[5,1,3]),1,1),r[3]=e.createMorphAt(e.childAt(t,[8]),3,3),e.insertBoundary(t,0),r},statements:[["inline","log",[["get","config",["loc",[null,[1,19],[1,25]]],0,0,0,0]],[],["loc",[null,[1,13],[1,27]]],0,0],["block","goto-btn",[],["href","#noclearmind","class","navbar-brand"],0,null,["loc",[null,[9,14],[9,94]]]],["block","goto-btn",[],["href","#noclearmind"],1,null,["loc",[null,[17,20],[17,70]]]],["block","goto-btn",[],["href","#about","class","btn btn-circle animated rubberBand infinite"],2,null,["loc",[null,[51,6],[53,19]]]]],locals:[],templates:[e,t,n]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:136,column:0}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","ncm-init",[],[],0,null,["loc",[null,[1,0],[135,13]]]]],locals:[],templates:[e]}}())}),define("noclearmind/config/environment",["ember"],function(e){var t="noclearmind";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),r=JSON.parse(unescape(a)),d={default:r};return Object.defineProperty(d,"__esModule",{value:!0}),d}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("noclearmind/app").default.create({name:"noclearmind",version:"0.0.0+c3802db9"});