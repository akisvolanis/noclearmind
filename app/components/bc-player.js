import Ember from 'ember';
import InViewportMixin from 'ember-in-viewport';

export default Ember.Component.extend(InViewportMixin, {

  onDidInsertElement: Ember.on('didInsertElement', function() {
    Ember.setProperties(this, {
      viewportEnabled           : true,
      viewportUseRAF            : true,
      viewportSpy               : true,
      viewportScrollSensitivity : 1,
      viewportRefreshRate       : 150,
      viewportTolerance: {
        top    : 0,
        bottom : 0,
        left   : 0,
        right  : 0
      }
    });
  }),

  didEnterViewport() {
    this.attrs.onEnterView(true);
  },
 
  didExitViewport() {
    this.attrs.onExitView(false);
  }
});

