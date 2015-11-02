import Ember from 'ember';

export default Ember.Controller.extend({
  message_count: function(){
    console.log(this.get('session.currentUser.messages.length'))
  }.property('session.currentUser.messages.length'),
  currentUser: function(){
    console.log(this.get('session.currentUser.user_id'))
  }.observes('session.currentUser.user_id'),
  hasMessage: function(){
    console.log(this.get('session.currentUser.messages.length'))
    return (this.get('session.currentUser.messages.length') > 0)
  }.property('session.currentUser.messages.length')

});
