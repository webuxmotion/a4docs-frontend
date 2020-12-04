import React from 'react';
import styled from 'styled-components';

import bp from '../constants/bp';

const Header = styled.h2`
  width: 100%;
  text-align: ${props => props.center ? "center" : "left"};
  margin: 0;
  color: ${props => props.theme === "dark" ? "black" : "white"};;
  font-size: 40px;

  ${bp.mobile} {
    font-size: 30px;
  }
`;

const Title = ({ children, center, theme }) => (
  <Header center={center} theme={theme}>
    {children}
  </Header>
);

export default Title;
