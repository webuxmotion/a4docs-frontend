import React, { useState } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import { variables, bp } from '../constants';
import Menu from './Menu';
import Logo from './Logo';
import Link from './Link';
import AddDocButton from './AddDocButton';

const themes = ['primary', 'rebeccapurple', 'red', 'green'];

const HeaderWrapper = styled.div``;

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
  background-color: var(--color-secondary);
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
  background-color: var(--color-primary);
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

const SliderDots = styled.div`
  height: 80px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

const SliderDot = styled.div`
  width: 10px;
  height: 10px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ active }) => active ? 'white' : 'var(--color-secondary)'};

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

let themeIndex = 1;

const Header = inject('stateStore')(observer(({ stateStore }) => {

  const handleChangeTheme = () => {
    const theme = themes[themeIndex];
    stateStore.setBodyClassName(theme);
    themeIndex++;
    if (themeIndex >= themes.length) {
      themeIndex = 0;
    }
  }

  return (
    <div className="section">
      <div className="container" style={{ position: 'relative' }}>
        <BodyWrapper>
          <Body>
            <Logo />
            <AddDocButton />
          </Body>
        </BodyWrapper>
        <SliderDots>
          <SliderDot active />
          <SliderDot />
          <SliderDot />
        </SliderDots>
      </div>
      <LoginButtonWrapper>
        <LoginButton to="/signin">Log In</LoginButton>
        <BurgerButton onClick={handleChangeTheme}>
          <BurgerIcon></BurgerIcon>
        </BurgerButton>
      </LoginButtonWrapper>
    </div>
  )
}));

export default Header;
