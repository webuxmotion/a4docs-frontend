import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #8486FF 0%, #543FF6 100%);
`;

const FullscreenWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default FullscreenWrapper;