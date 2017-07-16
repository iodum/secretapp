import Ember from 'ember';

export default Ember.Controller.extend({
  authManager: Ember.inject.service('auth-manager'),

  actions: {
    logout() {
      this.get('authManager').invalidate();
      this.transitionToRoute('login');
    }
  }
});

