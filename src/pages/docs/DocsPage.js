import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Fab, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SignOutIcon from '@material-ui/icons/ExitToApp'
import styled from 'styled-components';
import DocsFilters from '../../components/DocsFilters';
import Doc from '../../components/Doc';

const DocsWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const DocsHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #757c87;
`;

const Title = styled.h1`
  width: 100%;
  color: #edf4ff;
`;

const CreateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const DocsContainer = styled.div`
  padding-top: 20px;
`;

const EmptyDocsPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

const SignOutIconContainer = styled.div`
  margin-left: 10px;
  
  .signOutIcon {
    fill: #edf4ff;
  }
`;

@inject('docsStore', 'routerStore', 'userStore')
@observer
class DocsPage extends Component {
  componentDidMount() {
    this.props.docsStore.fetchDocs();
  }
  
  handleSignOut = () => {
    const { userStore, docsStore, routerStore } = this.props;
    userStore.signout();
    docsStore.resetDocs();
    routerStore.push('/signin');
  };

  renderDocs = () => {
    const { docsStore } = this.props;

    if (!docsStore.docs.length) {
      return <EmptyDocsPlaceholder>No docs available. Create one?</EmptyDocsPlaceholder>
    }

    return docsStore.docs.map(doc => (
      <Doc
        key={doc.id}
        id={doc.id}
        title={doc.title}
        content={doc.content}
        personal={doc.personal}
      />
    ));
  };

  render() {
    return (
      <DocsWrapper>
        <DocsHeader>
          <Title>A4Docs</Title>

          <CreateButtonContainer>
            <Fab
              variant="extended"
              onClick={() => this.props.routerStore.push('/docs/create')}
            >
              <AddIcon />
              Create Doc
            </Fab>

            <SignOutIconContainer>
              <IconButton onClick={this.handleSignOut}>
                <SignOutIcon className="signOutIcon" />
              </IconButton>
            </SignOutIconContainer>
          </CreateButtonContainer>
        </DocsHeader>

        <DocsFilters />

        <DocsContainer>
          {this.renderDocs()}
        </DocsContainer>
      </DocsWrapper>
    );
  }
}

export default DocsPage;
