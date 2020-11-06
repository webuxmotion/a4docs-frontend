import React from 'react';
import styled from 'styled-components';

const Header = styled.h2`
  width: 100%;
  text-align: ${props => props.center ? "center" : "left"};
  margin: 0;
  color: white;
  font-size: 40px;
`;

const Title = ({ children, center }) => (
  <Header center={center}>
    {children}
  </Header>
);

export default Title;