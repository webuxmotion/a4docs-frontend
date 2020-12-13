import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';

import { variables } from '../constants';
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
  padding: 20px;

  ${({ active }) => active && `
    opacity: 1;
    pointer-events: all;
  `}
`;

const LinkButton = styled(Link)`
  cursor: pointer;
  font-size: 32px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -3px;
    left: 0;
    height: 10px;
    background-color: var(--color-secondary);
  }

  span {
    position: relative;
    z-index: 2;
  }
`;

const ThemeListTitle = styled.p`

`;

const ThemeList = styled.div`
  display: flex;
`;

const ThemeCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 5px solid;
  border-color: ${({ color }) => color};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  span {
    opacity: 0;
    font-weight: bold;
    font-family: ${variables.fontSecondary};

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

const DocsCounter = styled.div`
  color: white;
  font-size: 16px;
  position: absolute;
  top: 14px;
  left: 68px;
  z-index: 2;
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
  const node = useRef();
  const [activeMenu, setActiveMenu] = useState(false);
  const { stateStore } = stores;

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    
    setActiveMenu(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleChangeTheme = (theme) => {
    stateStore.setBodyClassName(theme);
  }

  const { bodyClassName, localDocs } = stateStore.state;
  const localDocsObj = JSON.parse(localDocs);
  const localDocsLength = Object.keys(localDocsObj).length;

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
        <div ref={node}>
          <BurgerButton active={activeMenu} onClick={() => setActiveMenu(!activeMenu)}>
            <BurgerIcon></BurgerIcon>
            { localDocsLength && <DocsCounter>{localDocsLength}</DocsCounter> }
          </BurgerButton>
          <NavigationList active={activeMenu}>
            <LinkButton 
              to="/list"
              cb={() => setActiveMenu(false)}
            ><span>Local docs ({localDocsLength})</span></LinkButton>
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
              ><span>A</span></ThemeCircle>
              <ThemeCircle 
                onClick={() => handleChangeTheme('rebeccapurple')}
                color="#663399"
                colorName='rebeccapurple'
                bodyClassName={bodyClassName}
              ><span>A</span></ThemeCircle>
              <ThemeCircle 
                onClick={() => handleChangeTheme('black')}
                color="#313131"
                colorName='black'
                bodyClassName={bodyClassName}
              ><span>A</span></ThemeCircle>
            </ThemeList>
          </NavigationList>
        </div>
      </LoginButtonWrapper>
    </div>
  )
});

export default Header;
