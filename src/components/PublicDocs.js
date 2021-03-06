import React from 'react';
import styled from 'styled-components';

import DocPreview from './DocPreview';
import Title from './Title';

import { UnderlinedLink } from './index';

import { ReactComponent as ArrowIconSvg } from '../icons/arrow-right.svg';

const Wrapper = styled.div`
  padding-right: 0 !important;
  position: relative;
`;

const ArrowList = styled.div`
  display: flex;
  position: absolute;
  top: 64px;
  right: 14%;
`;

const ArrowWrapper = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  ${({ leftarrow }) => leftarrow && `
    margin-right: 50px;
  `}

  svg {
    width: 100%;
  }
`;

const ArrowIcon = styled(ArrowIconSvg)`
  ${({ leftarrow }) => leftarrow && `
    transform: rotate(-180deg);
    position: relative;
    top: -1px;
  `}
`;

const Container = styled.div`
  display: flex;
  z-index: 2;
  position: relative;
`;

const Cell = styled.div`
  width: 50%;
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;
`;

const CellSlider = styled(Cell)`
  width: 62%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  overflow: hidden;
`;

const Description = styled.p`
  margin-top: 30px;
  max-width: 400px;
`;

const Bg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  background-color: var(--color-primary);
  opacity: 0.1;
`;

const DocWrapper = styled.div`
  width: 40%;
  margin-right: 6.6%;
  flex-shrink: 0;
`;

const PublicDocs = () => (
  <Wrapper className="section">
    <Container className="container">
      <Cell>
        <Title>Meet <br/>public <br/>docs</Title>
        <Description>Create documents, make them public and enjoy likes, comments and thanks</Description>
        <UnderlinedLink 
          to="/public-docs"
          text="See public docs"
          className="mt-6"
        />
        <ArrowList>
          <ArrowWrapper leftarrow="true">
            <ArrowIcon leftarrow="true" />
          </ArrowWrapper>
          <ArrowWrapper>
            <ArrowIcon />
          </ArrowWrapper>
        </ArrowList>
      </Cell>
      <CellSlider>
        <DocWrapper>
          <DocPreview
            title="Top 10 New Year comedies you should see"
            author="Jane Winsley"
            views="2 139 422"
          />
        </DocWrapper>
        <DocWrapper>
          <DocPreview
            title="Top 20 Design Agencies in Kyiv"
            author="Antony Robus"
            views="12 443"
          />
        </DocWrapper>
        <DocWrapper>
          <DocPreview
            title="Best burgers in Lviv"
            author="Ann Bonna"
            views="5 433"
          />
        </DocWrapper>
      </CellSlider>
    </Container>
    <Bg />
  </Wrapper>
);

export default PublicDocs;
