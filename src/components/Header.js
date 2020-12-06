import React from 'react';
import styled from 'styled-components';

import bp from '../constants/bp';
import colors from '../constants/styles-variables';
import Menu from './Menu';
import Logo from './Logo';
import Link from './Link';
import AddDocButton from './AddDocButton';

const HeaderWrapper = styled.div`
  
`;

const BodyWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  top: 0;
  padding-right: 100px;
`;

const Body = styled.div`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
  padding-right: 20px;
`;

const LoginButtonWrapper = styled.div`
  width: 200px;
  height: 80px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`;

const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
  background-color: ${colors.secondaryColor};
  font-size: 16px;
  position: relative;
`;

const BurgerButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100px;
  cursor: pointer;
  position: absolute;
  left: 100%;
  top: 0;
  background-color: ${colors.primaryColor};
`;

const BurgerIcon = styled.div`
  position: relative;

  &:after, &:before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: white;
  }

  &:after {
    margin-top: 10px;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div className="container" style={{ position: 'relative' }}>
      <BodyWrapper>
        <Body>
          <Logo />
          <AddDocButton />
        </Body>
      </BodyWrapper>
    </div>
    <LoginButtonWrapper>
      <LoginButton to="/signin">Log In</LoginButton>
      <BurgerButton>
        <BurgerIcon></BurgerIcon>
      </BurgerButton>
    </LoginButtonWrapper>
  </HeaderWrapper>
);

export default Header;
