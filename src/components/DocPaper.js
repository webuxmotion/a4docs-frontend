import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme === "color" ? '#8182FE' : 'white'};
  position: relative;
  box-shadow: 0px 4px 60px rgba(0, 0, 0, 0.13);
`;

const DocInner = styled.div`
  padding-bottom: 140%;
`;

const DocCanvas = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const DocPaper = ({ children, theme }) => (
  <Wrapper theme={theme}>
    <DocInner />
    <DocCanvas>{children}</DocCanvas>
  </Wrapper>
);

export default DocPaper;