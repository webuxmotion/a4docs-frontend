import React, { Component, Fragment } from 'react';
import { Route } from 'react-router';
import { inject, observer } from 'mobx-react';

import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import DocsPage from './pages/docs/DocsPage';
import CreateDocPage from './pages/create-doc/CreateDocPage';
import ViewDocPage from './pages/view-doc/ViewDocPage';
import Header from './components/Header';

@inject('routerStore')
@observer
class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Route exact path="/" component={SignInPage} />
        <Route path="/signin/" component={SignInPage} />
        <Route path="/signup/" component={SignUpPage} />
        <Route exact path="/docs" component={DocsPage} />
        <Route exact path="/docs/view/:id" component={ViewDocPage} />
        <Route exact path="/docs/edit/:id" component={CreateDocPage} />
        <Route exact path="/docs/create" component={CreateDocPage} />
      </Fragment>
    );
  }
}

export default App;
