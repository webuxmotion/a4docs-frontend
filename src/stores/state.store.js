import { observable, action } from 'mobx';

export default class UserStore {
  @observable state = {
    bodyClassName: null
  };

  constructor() {
    this.state.bodyClassName = localStorage.getItem('bodyClassName');
  }

  @action
  setBodyClassName(value) {
    localStorage.setItem('bodyClassName', value);
    this.state.bodyClassName = value;
  }
}
