import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { createBrowserHistory } from 'history';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router';

import App from './App';
import UserStore from './stores/user.store';
import AuthService from './services/auth.service';
import DocsStore from './stores/docs.store';
import StateStore from './stores/state.store';
import DocsService from './services/docs.service';


const services = {};
const stores = {};

stores.routerStore = new RouterStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, stores.routerStore);

services.docsService = new DocsService(stores.routerStore);
services.authService = new AuthService();

stores.docsStore = new DocsStore(services.docsService);
stores.userStore = new UserStore(services.authService);
stores.stateStore = new StateStore();

const Root = (
  <Provider {...stores}>
    <Router history={history}>
      <App stores={stores} />
    </Router>
  </Provider>
);
ReactDOM.render(Root, document.getElementById('root'));
