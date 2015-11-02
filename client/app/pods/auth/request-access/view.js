import Ember from 'ember';

export default Ember.View.extend({
  templateName: 'auth/request-access',
  didInsertElement: function () {
    Ember.$('body').addClass('request-access');
  },
  willDestroyElement: function() {
    Ember.$('body').removeClass('request-access');
  }

});
