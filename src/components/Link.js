import React, { Component } from 'react';
import styled from 'styled-components';

import { inject } from 'mobx-react';

const LinkWrapper = styled.span`
  color: white;
  opacity: 0.5;
  cursor: pointer;
  border-bottom: 1px solid white;

  &:hover {
    opacity: 1;
  }
`;

@inject('routerStore')
class Link extends Component {

  goTo = (link) => {
    this.props.routerStore.push(link);
  };

  render() {

    return (
      <LinkWrapper onClick={() => this.goTo(this.props.to)}>{this.props.children}</LinkWrapper>
    );
  }
}

export default Link;
