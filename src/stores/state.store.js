import { observable, action, makeObservable } from 'mobx';

import createAlias from '../utils/createAlias';

export default class UserStore {
  state = {
    bodyClassName: null,
    localDocs: null,
  };

  constructor() {
    makeObservable(this, {
      state: observable,
      setBodyClassName: action,
      addDoc: action,
      updateDoc: action,
    });

    this.state.bodyClassName = localStorage.getItem('bodyClassName');
    
    this.state.localDocs = localStorage.getItem('localDocs') || '{}';
  }

  setBodyClassName(value) {
    localStorage.setItem('bodyClassName', value);
    this.state.bodyClassName = value;
  }

  addDoc(value) {
    const localDocs = this.state.localDocs && JSON.parse(this.state.localDocs);

    const alias = createAlias(value.title, Object.keys(localDocs));

    localDocs[alias] = value;

    this.state.localDocs = JSON.stringify(localDocs);
    localStorage.setItem('localDocs', this.state.localDocs);

    return {
      alias,
      doc: value,
    }
  }

  updateDoc(value) {
    const localDocs = this.state.localDocs && JSON.parse(this.state.localDocs);

    const { alias, doc } = value;

    localDocs[alias] = doc;

    this.state.localDocs = JSON.stringify(localDocs);
    localStorage.setItem('localDocs', this.state.localDocs);

    return {
      alias,
      doc,
    }
  }
}
