import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  ${({ theme }) => {
    if (theme === 'primary') {
      return 'color: #472bf2;'
    }
  }}
`;

const Header = ({ children, center, theme }) => (
  <LogoWrapper theme={theme} center={center} href="/">A4Docs</LogoWrapper>
);

export default Header;
