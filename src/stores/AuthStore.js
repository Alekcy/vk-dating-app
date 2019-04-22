import { observable, action } from 'mobx';
import axios from 'axios-jsonp-pro';

class AuthStore {
  @observable
  token = null;

  @action
  setTokenFromLocalStorage () {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  };

  @action
  setToken (token) {
    this.token = token;
    localStorage.setItem('token', token);
  };

  @action
  login () {
    window.location.href =
      'https://oauth.vk.com/authorize' +
      '?client_id=6478954' +
      '&display=page' +
      '&redirect_uri='+window.location.origin+'/login-callback' +
      '&scope=friends' +
      '&response_type=token' +
      '&v=5.95' +
      '&state=123456';
  };
}

export default new AuthStore();
