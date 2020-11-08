import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  background-color: #0228ED;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  min-width: 84px;
  border-radius: 20px;
  padding: 5px 20px;
  box-sizing: border-box;
`;

const Badge = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default Badge;