import React, { Component } from 'react';
import styled from 'styled-components';

import { inject } from 'mobx-react';

const LinkWrapper = styled.span``;

@inject('routerStore')
class Link extends Component {

  goTo = (link, event) => {

    if (this.props.preRouter) {
      this.props.preRouter(event);
    }

    if (this.props.cb) {
      this.props.cb(event);
    }

    this.props.routerStore.push(link);
  };

  render() {

    return (
      <LinkWrapper className={this.props.className} onClick={(event) => this.goTo(this.props.to, event)}>{this.props.children}</LinkWrapper>
    );
  }
}

export default Link;
