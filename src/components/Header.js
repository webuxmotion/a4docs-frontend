import React, { useState } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { variables, bp } from '../constants';
import Logo from './Logo';
import Link from './Link';
import AddDocButton from './AddDocButton';

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

const NavigationList = styled.div`
  background-color: white;
  width: 300px;
  height: 400px;
  left: 100%;
  position: absolute;
  opacity: 0;
  pointer-events: none;

  ${({ active }) => active && `
    opacity: 1;
    pointer-events: all;
  `}
`;

const ThemeListTitle = styled.p`
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
`;

const ThemeList = styled.div`
  display: flex;
  padding: 20px;
`;

const ThemeCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  span {
    color: white;
    opacity: 0;

    ${({ bodyClassName, colorName }) => {
      if (!bodyClassName) bodyClassName = 'primary';
      
      if (bodyClassName === colorName) {
        return `
          opacity: 1;
        `
      }
    }}
  }
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

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.1);
    opacity: 0;
  }

  ${({ active }) => active && `
    &:after {
      opacity: 1;
    }
  `}
`;

const BurgerIcon = styled.div`
  position: relative;
  z-index: 1;

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

const Header = observer(({ stores }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleChangeTheme = (theme) => {
    stores.stateStore.setBodyClassName(theme);
  }

  const { bodyClassName } = stores.stateStore.state;

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
        <BurgerButton active={activeMenu} onClick={() => setActiveMenu(!activeMenu)}>
          <BurgerIcon></BurgerIcon>
        </BurgerButton>
        <NavigationList active={activeMenu}>
          <ThemeListTitle>Active Theme</ThemeListTitle>
          <ThemeList>
            <ThemeCircle 
              onClick={() => handleChangeTheme('primary')}
              color={variables.primaryColor}
              colorName='primary'
              bodyClassName={bodyClassName}
            ><span>A</span></ThemeCircle>
            <ThemeCircle 
              onClick={() => handleChangeTheme('green')}
              color="#2F6E75"
              colorName='green'
              bodyClassName={bodyClassName}
            ><span>B</span></ThemeCircle>
            <ThemeCircle 
              onClick={() => handleChangeTheme('rebeccapurple')}
              color="#663399"
              colorName='rebeccapurple'
              bodyClassName={bodyClassName}
            ><span>C</span></ThemeCircle>
          </ThemeList>
        </NavigationList>
      </LoginButtonWrapper>
    </div>
  )
});

export default Header;
