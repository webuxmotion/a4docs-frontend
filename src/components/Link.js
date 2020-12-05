import React, { Component } from 'react';
import styled from 'styled-components';

import { inject } from 'mobx-react';

const LinkWrapper = styled.span`
  
`;

@inject('routerStore')
class Link extends Component {

  goTo = (link) => {
    this.props.routerStore.push(link);
  };

  render() {

    return (
      <LinkWrapper className={this.props.className} onClick={() => this.goTo(this.props.to)}>{this.props.children}</LinkWrapper>
    );
  }
}

export default Link;
