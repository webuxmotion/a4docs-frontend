import { observable, action } from 'mobx';

export default class UserStore {
  @observable username = null;

  constructor(authService) {
    this.authService = authService;
    this.username = localStorage.getItem('username');
  }

  @action
  async signin(username, password) {
    const res = await this.authService.signin(username, password);
    localStorage.setItem('username', res);
    this.username = res;
  }

  @action
  async signup(username, password) {
    return this.authService.signup(username, password);
  }

  @action
  signout() {
    this.username = null;
    localStorage.removeItem('username');
    this.authService.removeToken();
  }
}
