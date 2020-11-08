import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
import DocDropdown from '../../components/DocDropdown';

const HeroBackground = styled.div`
  position: absolute;
  height: 500px;
  left: 0px;
  top: 0px;
  right: 0;
  z-index: 1;
  background: linear-gradient(267.52deg, #8385FF 47.93%, #5642F6 102.26%);
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -12px;
  left: 40px;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: -150px;
`;

const DocWrapper = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const Title = styled.h1`
  width: 720px;
  margin: 0 auto;
  color: white;
  font-size: 36px;
  font-weight: 300;
  line-height: 36px;
  margin-bottom: 30px;
  padding: 0 40px;
  box-sizing: border-box;
`;

const DocPaper = styled.div`
  background-color: white;
  position: relative;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.13);
`;

const DocInner = styled.div`
  padding-bottom: 140%;
`;

const DocCanvas = styled.div`
  padding-bottom
`;

const ContentText = styled.p`
  position: absolute;
  top: 50px;
  left: 40px;
  font-size: 24px;
  margin: 0;
`;

const Actions = styled.div`
  position: absolute;
  right: -80px;
  top: 0;
`;

const EmptyDocsPlaceholder = styled.p`
  color: #edf4ff;
  text-align: center;
  font-size: 22px;
`;

const Content = styled.div`
  position: relative;
  padding-top: 140px;
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
        <Title>{title}</Title>
        <DocWrapper>
          <DocPaper>
            <DocInner />
            {personal === 'FALSE' ? <BadgeWrapper><Badge>public</Badge></BadgeWrapper> : null}
            <BackButtonWrapper>
              <BackButton onClick={() => this.props.routerStore.push('/docs')} />
            </BackButtonWrapper>
            <Actions>
              <DocDropdown 
                id={id}
                personal={personal}
                handleSetPersonal={this.handleSetPersonal}
                handleDelete={this.deleteDoc}
              />
            </Actions>
            <DocCanvas>
              <ContentText>{content}</ContentText>
            </DocCanvas>
          </DocPaper>
        </DocWrapper>
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
