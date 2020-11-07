import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import DocsFilters from '../../components/DocsFilters';
import Doc from '../../components/Doc';
import FullscreenWrapper from '../../components/FullscreenWrapper';

const DocsWrapper = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  padding-top: 100px;
`;

const DocsContainer = styled.div`
  padding-top: 20px;
`;

const EmptyDocsPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

@inject('docsStore', 'routerStore', 'userStore')
@observer
class DocsPage extends Component {
  componentDidMount() {
    this.props.docsStore.fetchDocs();
  }

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
      <FullscreenWrapper>
        <DocsWrapper>
          <DocsFilters />

          <DocsContainer>
            {this.renderDocs()}
          </DocsContainer>
        </DocsWrapper>
      </FullscreenWrapper>
    );
  }
}

export default DocsPage;
