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
    toggleMute(value) {
      if(value != null) {
        if(!this.get('isMuted')) {
          if (value) {
            //this.set('isMuted', true);
            Ember.$('#fs-video').animate({volume: 0}, 600);
          } else {
            //this.set('isMuted', false);
            Ember.$('#fs-video').animate({volume: 1}, 600);
          }
        }
      } else {
        //this.toggleProperty('isMuted');
        if (!this.get('isMuted')) {
          this.toggleProperty('isMuted');
          Ember.$('#fs-video').animate({volume: 0}, 600);
        } else {
          this.toggleProperty('isMuted');
          Ember.$('#fs-video').animate({volume: 1}, 600);
        }
      }
    }
  }
});
