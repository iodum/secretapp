import Ember from 'ember';

export default Ember.Service.extend({
  accessToken: null,
  isAuthenticated: Ember.computed.bool('accessToken'),

  authenticate(email, password) {
    let user = { email: email, password: password };
    return Ember.$.ajax({
        method: "POST",
        url: "https://reqres.in/api/login",
        data: user
      }).then((result) => {
        user.token = result.token;
        this.set('accessToken', result.token);
        localStorage.setItem('session', JSON.stringify(user));
  });
  },

  invalidate() {
    this.set('accessToken', null);
    localStorage.removeItem('session');
  },

  loadSession() {
    let session = localStorage.session;
    if (session) {
      session = JSON.parse(localStorage.session);
      this.set('accessToken', session.token);
    }
  }

});
