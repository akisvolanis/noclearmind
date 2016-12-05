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
      //console.log(this.get('elementId')+'-player');
      let widgetIframe = document.getElementById(this.get('elementId')+'-player'),
      widget = SC.Widget(widgetIframe);
      widget.bind(SC.Widget.Events.READY, function(){
        widget.bind(SC.Widget.Events.PLAY, function() {
          if(this.attrs.onPlay) {
            //console.log('play');
            this.attrs.onPlay();
          }
        }.bind(this));

        widget.bind(SC.Widget.Events.PAUSE, function() {
          if(this.attrs.onPause) {
            //console.log('pause');
            this.attrs.onPause();
          }
        }.bind(this));

        //widget.play();
        this.set('sc-player', widget);
      }.bind(this));
    });
  }),

  didEnterViewport() {
    //console.log('enter');
    if(this.get("sc-player") && this.attrs.autoplay) {
      this.get("sc-player").play();
      if(this.attrs.onEnterView) {
        this.attrs.onEnterView();
      }
    }
  },
 
  didExitViewport() {
    //console.log('exit');
    if(this.get("sc-player") && this.attrs.autoplay) {
      this.get("sc-player").pause();
      if(this.attrs.onExitView) {
        this.attrs.onExitView();
      }
    }
  }
});
