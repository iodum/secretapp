import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://reqres.in',
  namespace: 'api',

  authManager: Ember.inject.service('auth-manager'),
  headers: Ember.computed('authManager.accessToken', function() {
    return {
      "AUTH_TOKEN": this.get("authManager.accessToken")
    };
  })
});
