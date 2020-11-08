import React, { Component } from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import { Link } from 'react-router-dom';

import Badge from './Badge';
import DocDropdown from './DocDropdown';

const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
`;

const Title = styled(Link)`
  margin: 0;
  display: inline-block;
  margin-bottom: 20px;
  font-size: 24px;
  padding-right: 80px;
  color: black;
  text-decoration: none;

  &:hover {
    color: rgb(38, 0, 117);
  }
`;

const DropdownWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
`;

const Content = styled.div`
  position: relative;
`;

const DocPaper = styled.div`
  width: 134px;
  height: 189px;
  background-color: white;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.25);
`;

const DocContent = styled.div`
  position: absolute;
  top: 26px;
  left: 26px;
  overflow: hidden;
`;

const DocText = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical; 
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -12px;
  left: 23px;
`;

@inject('docsStore', 'routerStore')
class Doc extends Component {
  deleteDoc = () => {
    this.props.docsStore.deleteDoc(this.props.id);
  };

  handleSetPersonal = (value) => {
    this.props.docsStore.updateDocPersonal(this.props.id, value);
  };

  render() {
    const { title, content, personal, id } = this.props;

    return (
      <CardContainer>
        <DropdownWrapper>
          <DocDropdown 
            id={id}
            personal={personal}
            handleSetPersonal={this.handleSetPersonal}
            handleDelete={this.deleteDoc}
          />
        </DropdownWrapper>
        <Header>
          <Title to={`/docs/view/${id}`}>{title}</Title>
        </Header>
        <Content>
          <DocPaper />
          {personal === 'FALSE' ? <BadgeWrapper><Badge>public</Badge></BadgeWrapper> : null}
          <DocContent>
            <DocText>{content}</DocText>
          </DocContent>
        </Content>
      </CardContainer>
    );
  }
}

export default Doc;
