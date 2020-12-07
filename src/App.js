import React, { Component, Fragment } from 'react';
import BodyClassName from 'react-body-classname';
import { Route } from 'react-router';
import { inject, observer } from 'mobx-react';

import SignInPage from './pages/signin/SignInPage';
import SignUpPage from './pages/signup/SignUpPage';
import DocsPage from './pages/docs/DocsPage';
import CreateDocPage from './pages/create-doc/CreateDocPage';
import ViewDocPage from './pages/view-doc/ViewDocPage';
import EditDocPage from './pages/edit-doc/EditDocPage';
import LandingPage from './pages/landing/LandingPage';

import Header from './components/Header';
import Hot from './components/Hot';
import GlobalStyle from './components/GlobalStyle';

const App = observer(({ stores }) => {
  const { bodyClassName } = stores.stateStore.state;
  
  return (
    <BodyClassName className={bodyClassName ?? 'primary'}>
      <Fragment>
        <GlobalStyle />
        {/* <Hot /> */}
        <div style={{ position: 'relative' }}>
          <Header stores={stores} />
        </div>

        <Route exact path="/" component={LandingPage} />
        <Route path="/signin/" component={SignInPage} />
        <Route path="/signup/" component={SignUpPage} />
        <Route exact path="/docs" component={DocsPage} />
        <Route exact path="/docs/view/:id" component={ViewDocPage} />
        <Route exact path="/docs/edit/:id" component={EditDocPage} />
        <Route exact path="/docs/create" component={CreateDocPage} />
      </Fragment>
    </BodyClassName>
  );
})

// @inject('routerStore', 'stateStore')
// @observer
// class App extends Component {
//   render() {
//     const { bodyClassName } = this.props.stateStore.state;

//     return (
//       <BodyClassName className={bodyClassName ?? 'primary'}>
//         <Fragment>
//           <GlobalStyle />
//           {/* <Hot /> */}
//           <div style={{ position: 'relative' }}>
//             <Header />
//           </div>

//           <Route exact path="/" component={LandingPage} />
//           <Route path="/signin/" component={SignInPage} />
//           <Route path="/signup/" component={SignUpPage} />
//           <Route exact path="/docs" component={DocsPage} />
//           <Route exact path="/docs/view/:id" component={ViewDocPage} />
//           <Route exact path="/docs/edit/:id" component={EditDocPage} />
//           <Route exact path="/docs/create" component={CreateDocPage} />
//         </Fragment>
//       </BodyClassName>
//     );
//   }
// }

export default App;
