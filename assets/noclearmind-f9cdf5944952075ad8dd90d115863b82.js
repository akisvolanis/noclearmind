"use strict";define("noclearmind/app",["exports","ember","noclearmind/resolver","ember-load-initializers","noclearmind/config/environment"],function(e,t,a,n,r){var d=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,d=t.default.Application.extend({rootElement:"#noclearmind",modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:a.default}),(0,n.default)(d,r.default.modulePrefix),e.default=d}),define("noclearmind/components/app-version",["exports","ember-cli-app-version/components/app-version","noclearmind/config/environment"],function(e,t,a){var n=a.default.APP.name,r=a.default.APP.version;e.default=t.default.extend({version:r,name:n})}),define("noclearmind/components/goto-btn",["exports","ember"],function(e,t){e.default=t.default.Component.extend({classNames:["goto-btn-component"],tagName:"a",attribeNameBindings:["href"],href:"",onDidInsertElement:t.default.on("didInsertElement",function(){}),click:function(){var e=t.default.$(this.get("href")),a=e.offset().top?e.offset().top:0;t.default.$("html, body").stop().animate({scrollTop:a},1e3,"easeInOutExpo")}})}),define("noclearmind/components/ncm-init",["exports","ember"],function(e,t){e.default=t.default.Component.extend({tagName:"",onDidInsertElement:t.default.on("didInsertElement",function(){t.default.run.scheduleOnce("afterRender",this,function(){t.default.$("body").scrollspy({target:".navbar-fixed-top"}),this.collapseNavbar(),t.default.$(window).scroll(this.collapseNavbar);var e=document.getElementById("fs-video"),a=document.getElementById("overlay");a&&!this.isMobile()&&(e.onloadeddata=function(){e.className="animated fadeIn",a.className="overlay animated fadeOut"},e.src="./makena.mp4",e.play())}),t.default.run.later(this,function(){t.default.$(".brand-heading").addClass("show")},1e3)}),isMobile:function(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))},collapseNavbar:function(){$(".navbar").offset().top>50?($(".navbar-fixed-top .navbar-brand").removeClass("hidden"),$(".navbar-fixed-top").addClass("top-nav-collapse")):($(".navbar-fixed-top .navbar-brand").addClass("hidden"),$(".navbar-fixed-top").removeClass("top-nav-collapse"))}})}),define("noclearmind/controllers/main",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({config:t.default.inject.service()})}),define("noclearmind/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("noclearmind/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("noclearmind/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","noclearmind/config/environment"],function(e,t,a){e.default={name:"App Version",initialize:(0,t.default)(a.default.APP.name,a.default.APP.version)}}),define("noclearmind/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("noclearmind/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("noclearmind/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,a){e.default={name:"ember-data",initialize:t.default}}),define("noclearmind/initializers/export-application-global",["exports","ember","noclearmind/config/environment"],function(e,t,a){function n(){var e=arguments[1]||arguments[0];if(a.default.exportApplicationGlobal!==!1){var n,r=a.default.exportApplicationGlobal;n="string"==typeof r?r:t.default.String.classify(a.default.modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("noclearmind/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("noclearmind/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("noclearmind/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("noclearmind/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("noclearmind/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("noclearmind/router",["exports","ember","noclearmind/config/environment"],function(e,t,a){var n=t.default.Router.extend({location:a.default.locationType,rootURL:a.default.rootURL});n.map(function(){this.route("main",{path:"/test"}),this.route("comingsoon",{path:"/"})}),e.default=n}),define("noclearmind/routes/comingsoon",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("noclearmind/routes/main",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("noclearmind/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("noclearmind/services/config",["exports","ember-config-service/services/config"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("noclearmind/templates/comingsoon",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:14,column:10}},moduleName:"noclearmind/templates/comingsoon.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("style"),n=e.createTextNode("\n  body { text-align: center; padding: 150px; }\n  h1 { font-size: 50px; }\n  body { font: 20px Helvetica, sans-serif; color: #333; background: #F3F3F3}\n  article { display: block; text-align: left; width: 650px; margin: 0 auto; }\n  a { color: #dc8100; text-decoration: none; }\n  a:hover { color: #333; text-decoration: none; }\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createElement("article"),n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("h1"),r=e.createTextNode("Coming soon!");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div"),r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("- noclearmind.com");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");return e.appendChild(a,n),e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("noclearmind/templates/components/goto-btn",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"noclearmind/templates/components/goto-btn.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]],0,0,0,0]],locals:[],templates:[]}}())}),define("noclearmind/templates/components/ncm-init",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"noclearmind/templates/components/ncm-init.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),n},statements:[["content","yield",["loc",[null,[1,0],[1,9]]],0,0,0,0]],locals:[],templates:[]}}())}),define("noclearmind/templates/main",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:13,column:14},end:{line:13,column:81}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("no clear mind");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:21,column:20},end:{line:21,column:57}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("home");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),a=function(){return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:100,column:6},end:{line:102,column:6}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createElement("i");e.setAttribute(a,"class","fa fa-angle-down"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:189,column:0}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createTextNode("  ");e.appendChild(t,a);var a=e.createComment(" Navigation ");e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("nav");e.setAttribute(a,"class","navbar navbar-custom navbar-fixed-top"),e.setAttribute(a,"role","navigation");var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","navbar-header");var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createElement("button");e.setAttribute(d,"type","button"),e.setAttribute(d,"class","navbar-toggle"),e.setAttribute(d,"data-toggle","collapse"),e.setAttribute(d,"data-target",".navbar-main-collapse");var i=e.createTextNode("\n                  Menu ");e.appendChild(d,i);var i=e.createElement("i");e.setAttribute(i,"class","fa fa-bars"),e.appendChild(d,i);var i=e.createTextNode("\n              ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n\n          ");e.appendChild(n,r);var r=e.createComment(" Collect the nav links, forms, and other content for toggling ");e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","collapse navbar-collapse navbar-right navbar-main-collapse");var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createElement("ul");e.setAttribute(d,"class","nav navbar-nav");var i=e.createTextNode("\n                  ");e.appendChild(d,i);var i=e.createComment(" Hidden li included to remove active class from about link when scrolled up past about section ");e.appendChild(d,i);var i=e.createTextNode("\n                  ");e.appendChild(d,i);var i=e.createElement("li");e.setAttribute(i,"class","hidden");var l=e.createTextNode("\n                    ");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n                  ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n");e.appendChild(d,i);var i=e.createTextNode("              ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createComment(" /.navbar-collapse ");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createComment(" /.container ");e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createComment(" Intro Header ");e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("header");e.setAttribute(a,"class","intro");var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","fullscreen-bg hidden-xs");var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createElement("video");e.setAttribute(r,"loop",""),e.setAttribute(r,"autoplay",""),e.setAttribute(r,"id","fs-video");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createTextNode("          ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","overlay"),e.setAttribute(n,"id","overlay"),e.appendChild(a,n);var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","intro-body");var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container");var d=e.createTextNode("\n              ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","row");var i=e.createTextNode("\n                  ");e.appendChild(d,i);var i=e.createElement("div");e.setAttribute(i,"class","col-xs-12");var l=e.createTextNode("\n                      ");e.appendChild(i,l);var l=e.createElement("h1");e.setAttribute(l,"class","brand-heading animated fadeIn");var o=e.createTextNode("\n                        ");e.appendChild(l,o);var o=e.createElement("span"),c=e.createTextNode("no clear mind");e.appendChild(o,c),e.appendChild(l,o);var o=e.createTextNode("\n                      ");e.appendChild(l,o),e.appendChild(i,l);var l=e.createTextNode("\n                      ");e.appendChild(i,l);var l=e.createElement("p");e.setAttribute(l,"class","intro-text"),e.appendChild(i,l);var l=e.createTextNode("\n                      \n                  ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n              ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","socials");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("ul"),d=e.createTextNode("\n          ");e.appendChild(r,d);var d=e.createElement("li");e.setAttribute(d,"class","social");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://www.facebook.com/NoClearMind");var l=e.createTextNode("\n              ");e.appendChild(i,l);var l=e.createElement("i");e.setAttribute(l,"class","fa fa-facebook fa-2x"),e.setAttribute(l,"aria-hidden","true"),e.appendChild(i,l);var l=e.createTextNode("\n            ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d);var d=e.createElement("li");e.setAttribute(d,"class","social");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://www.youtube.com/channel/UCEfQbbyCnBaRtNPGivvqu9A");var l=e.createTextNode("\n              ");e.appendChild(i,l);var l=e.createElement("i");e.setAttribute(l,"class","fa fa-youtube fa-2x"),e.setAttribute(l,"aria-hidden","true"),e.appendChild(i,l);var l=e.createTextNode("\n            ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d);var d=e.createElement("li");e.setAttribute(d,"class","social");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://soundcloud.com/noclearmind");var l=e.createTextNode("\n              ");e.appendChild(i,l);var l=e.createElement("i");e.setAttribute(l,"class","fa fa-soundcloud fa-2x"),e.setAttribute(l,"aria-hidden","true"),e.appendChild(i,l);var l=e.createTextNode("\n            ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d);var d=e.createElement("li");e.setAttribute(d,"class","social");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://noclearmind.bandcamp.com/music");var l=e.createTextNode("\n              ");e.appendChild(i,l);var l=e.createElement("i");e.setAttribute(l,"class","fa fa-bandcamp fa-2x"),e.setAttribute(l,"aria-hidden","true"),e.appendChild(i,l);var l=e.createTextNode("\n            ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d);var d=e.createElement("li");e.setAttribute(d,"class","social");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://itunes.apple.com/us/artist/no-clear-mind/id638574129");var l=e.createTextNode("\n              ");e.appendChild(i,l);var l=e.createElement("span");e.setAttribute(l,"class","fa-stack");var o=e.createTextNode("\n                ");e.appendChild(l,o);var o=e.createElement("i");e.setAttribute(o,"class","fa fa-circle-thin fa-stack-2x"),e.setAttribute(o,"aria-hidden","true"),e.appendChild(l,o);var o=e.createTextNode("\n                ");e.appendChild(l,o);var o=e.createElement("i");e.setAttribute(o,"class","fa fa-music"),e.setAttribute(o,"aria-hidden","true"),e.appendChild(l,o);var o=e.createTextNode("\n              ");e.appendChild(l,o),e.appendChild(i,l);var l=e.createTextNode("\n            ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d);var d=e.createElement("li");e.setAttribute(d,"class","social");var i=e.createTextNode("\n            ");e.appendChild(d,i);var i=e.createElement("a");e.setAttribute(i,"href","https://open.spotify.com/artist/2GkzAz3xr5IasfL5ukwDb9");var l=e.createTextNode("\n              ");e.appendChild(i,l);var l=e.createElement("i");e.setAttribute(l,"class","fa fa-spotify fa-2x"),e.setAttribute(l,"aria-hidden","true"),e.appendChild(i,l);var l=e.createTextNode("\n            ");e.appendChild(i,l),e.appendChild(d,i);var i=e.createTextNode("\n          ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n        ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("  ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createComment(" About Section ");e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("section");e.setAttribute(a,"id","about"),e.setAttribute(a,"class","container content-section text-justify");var n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-lg-10 col-lg-offset-1");var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n              No Clear Mind is a Greek band based between Athens and London. Their music traverses the wider spectre of rock, with heavy influences from genres such as ambient and psychedelic dream rock while the lyrics of their songs are exclusively written in English. They have released two full length albums, toured different countries in Europe and gained followers from all around the world.\n            ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n            ");e.appendChild(r,d);var d=e.createElement("p"),i=e.createTextNode("\n              No Clear Mind introduce themselves through their ambitious third LP, Makena. Striving over total creative control and experimentation, the Greeks opted to record mix and produce the album by themselves. They recorded live inside an old stone barn in South Greece, resulting in a dense multi-layered album, whose sound proves difficult to pigeonhole. Makena‘s themes are mostly introspective. The songs are structured around laid-back vocal melodies complimented by lush analogue synthesized soundscapes of an imaginary 70ʼs soundtrack, along with guitars that evoke the ambiance of Radioheadʼs recent work. The rhythmic driving power behind the album though, lies in the counterpoint between an elaborate mixture of syncopating guitars and pumping acoustic and electronic beats inspired by Tropical and African rhythms.\n            ");e.appendChild(d,i),e.appendChild(r,d);var d=e.createTextNode("\n          ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createComment(" releases Section ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createComment(" photos Section ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createComment(" Contact Section ");e.appendChild(t,a);var a=e.createTextNode("\n");e.appendChild(t,a);var a=e.createTextNode("\n\n  ");e.appendChild(t,a);var a=e.createComment(" Footer ");e.appendChild(t,a);var a=e.createTextNode("\n  ");e.appendChild(t,a);var a=e.createElement("footer"),n=e.createTextNode("\n      ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","container text-center");var r=e.createTextNode("\n          ");e.appendChild(n,r);var r=e.createElement("p"),d=e.createTextNode("Copyright © noclearmind.com 2016. Design by Akis.");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[5,1]),r=new Array(4);return r[0]=e.createMorphAt(t,0,0,a),r[1]=e.createMorphAt(e.childAt(n,[1]),3,3),r[2]=e.createMorphAt(e.childAt(n,[5,1,3]),1,1),r[3]=e.createMorphAt(e.childAt(t,[9]),9,9),e.insertBoundary(t,0),r},statements:[["inline","log",[["get","config",["loc",[null,[1,19],[1,25]]],0,0,0,0]],[],["loc",[null,[1,13],[1,27]]],0,0],["block","goto-btn",[],["href","#noclearmind","class","navbar-brand"],0,null,["loc",[null,[13,14],[13,94]]]],["block","goto-btn",[],["href","#noclearmind"],1,null,["loc",[null,[21,20],[21,70]]]],["block","goto-btn",[],["href","#about","class","btn btn-circle hidden-xs"],2,null,["loc",[null,[100,6],[102,19]]]]],locals:[],templates:[e,t,a]}}();return{meta:{revision:"Ember@2.8.1",loc:{source:null,start:{line:1,column:0},end:{line:190,column:0}},moduleName:"noclearmind/templates/main.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createComment("");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,a),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","ncm-init",[],[],0,null,["loc",[null,[1,0],[189,13]]]]],locals:[],templates:[e]}}())}),define("noclearmind/config/environment",["ember"],function(e){var t="noclearmind";try{var a=t+"/config/environment",n=document.querySelector('meta[name="'+a+'"]').getAttribute("content"),r=JSON.parse(unescape(n)),d={default:r};return Object.defineProperty(d,"__esModule",{value:!0}),d}catch(e){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests||require("noclearmind/app").default.create({name:"noclearmind",version:"0.0.0+ef031338"});