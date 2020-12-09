import React, { Fragment } from 'react';
import BodyClassName from 'react-body-classname';
import { Route } from 'react-router';
import { observer } from 'mobx-react';

import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import DocsPage from './pages/docs/DocsPage';
import CreateDocPage from './pages/create-doc/CreateDocPage';
import ViewDocPage from './pages/view-doc/ViewDocPage';
import EditDocPage from './pages/edit-doc/EditDocPage';
import LandingPage from './pages/landing/LandingPage';

import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle';
import Footer from './components/Footer';

const App = observer(({ stores }) => {
  const { bodyClassName } = stores.stateStore.state;
  
  return (
    <BodyClassName className={bodyClassName ?? 'primary'}>
      <Fragment>
        <GlobalStyle />
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Header stores={stores} />
        </div>

        <Route exact path="/" component={LandingPage} />
        <Route path="/signin/" component={SignInPage} />
        <Route path="/signup/" component={SignUpPage} />
        <Route exact path="/list" component={DocsPage} />
        <Route exact path="/list/:id" component={ViewDocPage} />
        <Route exact path="/list/:id/edit" component={EditDocPage} />
        <Route exact path="/add-doc" component={CreateDocPage} />
        <Footer />
      </Fragment>
    </BodyClassName>
  );
})

export default App;
