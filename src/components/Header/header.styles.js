import styled from 'styled-components';

import { variables } from '../../constants';
import Link from './../Link';

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

export { BodyWrapper, Body, SliderDots, SliderDot, LoginButtonWrapper, LoginButton, BurgerButton, BurgerIcon, DocsCounter, NavigationList, ThemeListTitle, ThemeList, ThemeCircle }
