import Ember from 'ember';

export default Ember.Component.extend({
  authManager: Ember.inject.service('auth-manager'),
  routing: Ember.inject.service('-routing'),

  actions: {
    authenticate() {
      const { login, password } = this.getProperties('login', 'password');
      this.get('authManager').authenticate(login, password).then(() => {
        this.get('routing').transitionTo('secret')
    }, (err) => {
        alert('Error obtaining token: ' + err.responseText);
      });
    }
  }

});
