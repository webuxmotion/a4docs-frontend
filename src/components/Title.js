import React from 'react';
import styled from 'styled-components';

import { bp, variables } from '../constants';

const Header = styled.h2`
  width: 100%;
  text-align: ${props => props.center ? "center" : "left"};
  margin: 0;
  color: ${props => props.theme === "light" ? "white" : 'var(--color-primary)'};
  font-family: ${variables.fontSecondary};
  font-size: 56px;
  line-height: 60px;

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
