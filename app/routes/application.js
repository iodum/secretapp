import Ember from 'ember';


export default Ember.Route.extend({
  authManager: Ember.inject.service('auth-manager'),

  beforeModel() {
    this._super(...arguments);

    this.get("authManager").loadSession();
    if (this.get("authManager.isAuthenticated") ) {
      this.replaceWith('secret');
    } else {
      this.replaceWith('login');
    }
  }
});
