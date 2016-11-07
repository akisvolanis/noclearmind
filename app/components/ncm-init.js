import Ember from 'ember';
/* globals $ */
export default Ember.Component.extend({
  tagName: '',

  onDidInsertElement: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      Ember.$('body').scrollspy({ target: '.navbar-fixed-top' });

      // jQuery to collapse the navbar on scroll
      this.collapseNavbar();
      Ember.$(window).scroll(this.collapseNavbar);

      var video = document.getElementById('fs-video');
      var overlay = document.getElementById('overlay');
      if(overlay && !this.isMobile()) {
        video.onloadeddata = function() {
          video.className = "animated fadeIn";
          overlay.className = "overlay animated fadeOut";
        };
        video.src = "./makena.mp4";
        video.play();
      }
      // Closes the Responsive Menu on Menu Item Click
      /*$('.navbar-collapse ul li a').click(function() {
          event.preventDefault();
          $(this).closest('.collapse').collapse('toggle');
      });*/
    });

    Ember.run.later(this, function() {      
      Ember.$('.brand-heading').addClass('show');
    },1000);
  }),

  isMobile() { 
   if( navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
   ){
      return true;
    }
   else {
      return false;
    }
  },

  collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top .navbar-brand").removeClass("hidden");
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top .navbar-brand").addClass("hidden");
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }
});
