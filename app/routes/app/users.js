import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {

    this.render('users', {
      into: 'app'
    });
  }
});
