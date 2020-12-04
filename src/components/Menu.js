import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import bp from '../constants/bp';
import Logo from './Logo';
import { ReactComponent as MenuIconSvg } from '../icons/menu.svg';
import { ReactComponent as CloseIconSvg } from '../icons/close.svg';

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  right: 400px;
  transform: translateX(400px);
  transition: transform 0.3s;
  position: relative;

  ${bp.from2to1} {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 400px;
    background-color: #ffffff;
    flex-direction: column;
    transition: transform 0.3s;
    transform: 
      ${({ activemenu }) => activemenu === 'true' ?
       'translateX(0)' : 
       'translateX(400px)'};
  }

  ${bp.mobile} {
    width: 100%;
    transform: 
      ${({ activemenu }) => activemenu === 'true' ?
       'translateX(0)' : 
       'translateX(100%)'};
  }
`;

const NavItem = styled.li`
  padding: 0 20px;

  &:last-child {
    padding-right: 0;
  }

  ${bp.from2to1} {
    padding: 0;
    border-bottom: 1px solid #c8befb;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  display: block;

  ${bp.from2to1} {
    color: #472bf2;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-top: 20px;
  }
`;

const MenuIcon = styled(MenuIconSvg)`
  width: 30px;
  height: 30px;
  fill: white;
  cursor: pointer;
  display: none;
  opacity: ${({ activemenu }) => activemenu === 'true' ? 0.4 : 1};

  ${bp.from2to1} {
    display: block;
  }
`;

const CloseIconWrapper = styled.div`
  display: none;
  justify-content: space-between;
  padding: 20px;

  ${bp.from2to1} {
    display: flex;
  }
`;

const CloseIcon = styled(CloseIconSvg)`
  width: 30px;
  height: 30px;
  fill: #472bf2;
  cursor: pointer;
  opacity: ${({ activemenu }) => activemenu === 'true' ? 0.4 : 1};
`;

@inject('docsStore', 'routerStore', 'userStore')
@observer
class Menu extends Component {
  state = {
    activeMenu: false
  }

  handleSignOut = (e) => {
    e.preventDefault();
    
    const { userStore, docsStore, routerStore } = this.props;

    userStore.signout();
    docsStore.resetDocs();
    routerStore.push('/signin');
  };

  render() {
    const { username } = this.props.userStore;
    const { activeMenu } = this.state;

    return (
      <>
        <MenuIcon 
          onClick={() => 
            this.setState((state) => ({ activeMenu: !state.activeMenu}))
          }
          activemenu={activeMenu.toString()}
        />
        <NavList activemenu={activeMenu.toString()}>
          <CloseIconWrapper>
            <Logo theme="primary" />
            <CloseIcon 
              onClick={() => 
                this.setState({ activeMenu: false })
              }
            />
          </CloseIconWrapper>
          {username ?
            <>
              <NavItem>
                <NavLink href="/docs">Documents</NavLink>
              </NavItem>
              <NavItem>
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
      </>
    )
  }
}

export default Menu;
