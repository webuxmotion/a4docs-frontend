import { observable, action, makeObservable } from 'mobx';

export default class UserStore {
  state = {
    bodyClassName: null
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      setBodyClassName: action,
    });

    this.state.bodyClassName = localStorage.getItem('bodyClassName');
  }

  setBodyClassName(value) {
    localStorage.setItem('bodyClassName', value);
    this.state.bodyClassName = value;
  }
}
