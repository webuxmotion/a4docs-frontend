import React from 'react';
import styled from 'styled-components';

import colors from '../constants/styles-variables';
import Link from './Link';

const LogoWrapper = styled(Link)`
  color: ${colors.primaryColor};
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  ${({ theme }) => {
    if (theme === 'primary') {
      return 'color: #472bf2;'
    }
  }}
`;

const Header = ({ children, center, theme }) => (
  <LogoWrapper theme={theme} center={center} to="/">A4Docs</LogoWrapper>
);

export default Header;
