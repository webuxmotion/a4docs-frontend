import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0 40px;
  position: absolute;
  padding-top: 30px;
  z-index: 40;
  box-sizing: border-box;
`;

const Header = () => (
  <HeaderWrapper>
    <Menu />
  </HeaderWrapper>
);

export default Header;