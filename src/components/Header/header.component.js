import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from "react-router";
import { observer } from 'mobx-react';

import { variables } from '../../constants';
import Logo from './../Logo';
import AddDocButton from './../AddDocButton';
import { UnderlinedLink } from '../index';
import isIndex from '../../utils/isIndex';

import { 
  BodyWrapper, Body, SliderDots, SliderDot, LoginButtonWrapper, LoginButton, BurgerButton, BurgerIcon, DocsCounter, NavigationList, ThemeListTitle, ThemeList, ThemeCircle
} from './header.styles.js';

const Header = observer(({ stores, location }) => {
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
        { isIndex(location.pathname) && (
          <SliderDots>
            <SliderDot active />
            <SliderDot />
            <SliderDot />
          </SliderDots>
        )}
      </div>
      <LoginButtonWrapper>
        <LoginButton to="/signin">Log In</LoginButton>
        <div ref={node}>
          <BurgerButton active={activeMenu} onClick={() => setActiveMenu(!activeMenu)}>
            <BurgerIcon></BurgerIcon>
            { localDocsLength && <DocsCounter>{localDocsLength}</DocsCounter> }
          </BurgerButton>
          <NavigationList active={activeMenu}>
            <UnderlinedLink
              to="/list"
              text={`Local docs (${localDocsLength})`}
              cb={() => setActiveMenu(false)}
              className="mt-2 mb-2"
            />
            <UnderlinedLink
              to="/add-doc"
              text="Add doc"
              cb={() => setActiveMenu(false)}
              className="mt-2 mb-2"
            />
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

export default withRouter(Header);
