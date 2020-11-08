import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import DocDropdown from '../../components/DocDropdown';
import DocLayout from '../../components/DocLayout';

const HeroBackground = styled.div`
  position: absolute;
  height: 500px;
  left: 0px;
  top: 0px;
  right: 0;
  z-index: 1;
  background: linear-gradient(267.52deg, #8385FF 47.93%, #5642F6 102.26%);
`;

const Actions = styled.div`
  position: absolute;
  left: 30px;
`;

const Title = styled.h1`
  color: white;
  font-size: 36px;
  font-weight: 300;
  line-height: 36px;
  margin-bottom: 30px;
  padding: 0 40px;
`;

const ContentText = styled.p`
  position: absolute;
  top: 50px;
  left: 40px;
  right: 40px;
  font-size: 24px;
  margin: 0;
`;

const EmptyDocsPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

const Content = styled.div`
  position: relative;
  padding-bottom: 100px;
  z-index: 20;
`;

@inject('docsStore', 'routerStore')
@observer
class DocsPage extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    
    this.props.docsStore.fetchDoc(id);
  }

  deleteDoc = () => {
    const { match: { params: { id } } } = this.props;
    this.props.docsStore.deleteDoc(id);
  };

  handleSetPersonal = (value) => {
    const { match: { params: { id } } } = this.props;

    this.props.docsStore.updateDocPersonal(id, value);
  };

  renderDoc = () => {
    const { docsStore } = this.props;

    if (!docsStore.doc) {
      return <EmptyDocsPlaceholder>We can't find the doc. <a href="/docs">See all docs</a></EmptyDocsPlaceholder>
    }

    const { id, title, content, personal } = docsStore.doc;

    return (
      <>
        <DocLayout 
          title={<Title>{title}</Title>}
          backButtonClickHandler={() => this.props.routerStore.push('/docs')}
          personal={personal}
          rightSideContent={
            (
              <Actions>
                <DocDropdown
                  id={id}
                  personal={personal}
                  handleSetPersonal={this.handleSetPersonal}
                  handleDelete={this.deleteDoc}
                />
              </Actions>
            )
          }
        >
          <ContentText>{content}</ContentText>
        </DocLayout>
      </>
    )
  };

  render() {
    return (
      <div>
        <HeroBackground />
        <Content>
          {this.renderDoc()}
        </Content>
      </div>
    );
  }
}

export default DocsPage;
