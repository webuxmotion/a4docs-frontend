import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Bg = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background-color: var(--color-primary);
  opacity: 0.1;
`;

const FullscreenWrapper = ({ children }) => (
  <Wrapper>
    <Content>
      {children}
    </Content>
    <Bg />
  </Wrapper>
);

export default FullscreenWrapper;
