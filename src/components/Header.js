import React from 'react';
import styled from 'styled-components';

import bp from '../constants/bp';
import Menu from './Menu';
import Logo from './Logo';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  position: absolute;
  padding-top: 30px;
  z-index: 40;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${bp.from2to1} {
    padding: 0 20px;
    padding-top: 20px;
  }
`;

const HeaderCell = styled.div`
  position: relative;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderCell>
      <Logo />
    </HeaderCell>
    <HeaderCell>
      <Menu />
    </HeaderCell>
  </HeaderWrapper>
);

export default Header;
