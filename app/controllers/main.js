import Ember from 'ember';

export default Ember.Controller.extend({
  config: Ember.inject.service(),

  isMuted: false,

  isMobile: Ember.computed(function(){ 
   if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
   ){
      return true;
    }
   else {
      return false;
    }
  }),

  currentYear: Ember.computed(function() {
    const d = new Date();
    return d.getFullYear();
  }),

  actions: {
    toggleMute() {
      //this.toggleProperty('isMuted');
      if (!this.get('isMuted')) {
        Ember.$('#fs-video').animate({volume: 0}, 600);
        Ember.run.later(this, function() {
          this.toggleProperty('isMuted');
        },1000);
      } else {
        this.toggleProperty('isMuted');
        Ember.$('#fs-video').animate({volume: 1}, 600);
      }
    }
  }
});
