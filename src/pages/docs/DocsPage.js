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
  display: flex;
  flex-wrap: wrap;
`;

const DocWrapper = styled.div`
  padding: 20px;
  width: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
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
      return <EmptyDocsPlaceholder>No docs available. <a href="/docs/create">Create one?</a></EmptyDocsPlaceholder>
    }

    return docsStore.docs.map(doc => (
      <DocWrapper key={doc.id}>
        <Doc
          id={doc.id}
          title={doc.title}
          content={doc.content}
          personal={doc.personal}
        />
      </DocWrapper>
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
