import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';
/*globals SC*/

export default Ember.Component.extend(InViewportMixin, {

  onDidInsertElement: Ember.on('didInsertElement', function() {
    Ember.setProperties(this, {
      viewportEnabled           : true,
      viewportUseRAF            : true,
      viewportSpy               : true,
      viewportScrollSensitivity : 1,
      viewportRefreshRate       : 150,
      viewportTolerance: {
        top    : 300,
        bottom : 300,
        left   : 0,
        right  : 0
      }
    });

    Ember.run.scheduleOnce('afterRender', this, function() {
      let widgetIframe = document.getElementById('sc-widget'),
        widget = SC.Widget(widgetIframe);
      widget.bind(SC.Widget.Events.READY, function(){
        /*widget.bind(SC.Widget.Events.PLAY, function() {
          // get information about currently playing sound
          widget.getCurrentSound(function(currentSound) {
            console.log('sound ' + currentSound.get('') + 'began to play');
          });
        });

        widget.play();*/
        this.set('sc-player', widget);
      }.bind(this));
    });
  }),

  didEnterViewport() {
    //console.log('enter');
    if(this.get("sc-player") && this.attrs.autoplay) {
      this.get("sc-player").play();
      this.attrs.onEnterView(true);
    }
  },
 
  didExitViewport() {
    //console.log('exit');
    if(this.get("sc-player") && this.attrs.autoplay) {
      this.get("sc-player").pause();
      this.attrs.onExitView(false);
    }
  }
});
