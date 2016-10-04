import Ember from 'ember';
/* globals $ */
export default Ember.Component.extend({
  tagName: '',

  onDidInsertElement: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      // jQuery to collapse the navbar on scroll
      this.collapseNavbar();
      Ember.$(window).scroll(this.collapseNavbar);

      // Closes the Responsive Menu on Menu Item Click
      /*$('.navbar-collapse ul li a').click(function() {
          event.preventDefault();
          $(this).closest('.collapse').collapse('toggle');
      });*/
    });
  }),

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
