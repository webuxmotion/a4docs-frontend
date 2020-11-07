import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;

const Header = ({ children, center }) => (
  <LogoWrapper center={center} href="/">A4Docs</LogoWrapper>
);

export default Header;