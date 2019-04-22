import { observable, action } from 'mobx';

class AuthStore {
  @observable token = null;

  @action
  setTokenFromLocalStorage = () => {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }
}

export default new AuthStore();
