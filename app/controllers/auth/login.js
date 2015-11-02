import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(LoginControllerMixin, EmberValidations.Mixin, {
  'logo-large': 'img/ccmh/logo_large.png',
  authenticator: 'simple-auth-authenticator:jwt',
  validations: {
    identification: {
      presence: true
    },
    password: {
      presence: true
    }
  },
  actions:{
    authenticateForm: function(isValid){
      console.log('checking form');
      if(isValid){
        console.log('Form was valid.');
        this.send('authenticate');
      }
    }
  }
});

