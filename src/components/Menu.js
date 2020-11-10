import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import Logo from './Logo';

const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 0 20px;

  &:last-child {
    padding-right: 0;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
`;

@inject('docsStore', 'routerStore', 'userStore')
@observer
class Menu extends Component {
  handleSignOut = (e) => {
    e.preventDefault();
    
    const { userStore, docsStore, routerStore } = this.props;

    userStore.signout();
    docsStore.resetDocs();
    routerStore.push('/signin');
  };

  render() {
    const { username } = this.props.userStore;

    return (
      <MenuWrapper>
        <div>
          <Logo />
        </div>
        <div>
          <NavList>
            {username ?
              <>
                <NavItem>
                  <NavLink href="/docs">Documents</NavLink>
                </NavItem>
                <NavItem style={{ marginRight: '50px' }}>
                  <NavLink href="/docs/create">+ Create document</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="" onClick={this.handleSignOut}>Sign Out</NavLink>
                </NavItem>
              </>
              :
              <>
                <NavItem>
                  <NavLink href="/signup">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signin">Login</NavLink>
                </NavItem>
              </>
            }
          </NavList>
          
        </div>
      </MenuWrapper>
    )
  }
}

export default Menu;