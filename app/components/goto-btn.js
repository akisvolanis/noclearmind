import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['goto-btn-component'],
  tagName: 'a',
  attribeNameBindings:['href'],
  href: '',

  onDidInsertElement: Ember.on('didInsertElement', function() {
    
  }),

  click() {
    var $anchor = $(this.get('href'));
    const _scroll = $anchor.offset().top ? $anchor.offset().top : 0;
    $('html, body').stop().animate({
        scrollTop: _scroll
    }, 1500, 'easeInOutExpo');
  }
});
