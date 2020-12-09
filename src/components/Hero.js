import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import heroImage from '../images/hero-image.png';

import { ReactComponent as CircleDotsIcon } from '../images/hero-text.svg';

const Wrapper = styled.div`
  background-color: var(--color-primary);
  overflow: hidden;
  padding-right: 0 !important;
`;

const Container = styled.div`
  display: flex;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
`;

const CellWithText = styled(Cell)`
  padding-top: 180px;
  width: 50%;

  svg {
    width: 100%;
  }
`;

const CellWithImage = styled(Cell)`
  width: 61.5%;
  padding-top: 80px;
  padding-left: 100px;

  img {
    width: 100%;
  }
`;

const BottomContainer = styled.div`
  color: white;
  padding-top: 40px;
  padding-bottom: 50px;
  box-sizing: border-box;

  span {
    margin-left: 44.5%;
    display: inline-block;
    max-width: 290px;
  }
`;

const Hero = inject('routerStore', 'userStore')(observer(({ routerStore, userStore: { username } }) => {

  return (
    <Wrapper className="section">
      <Container className="container">
        <CellWithText>
          <CircleDotsIcon />
        </CellWithText>
        <CellWithImage>
          <img src={heroImage} alt="Documents hero slider" />
        </CellWithImage>
      </Container>
      <BottomContainer className="container">
        <span>Save what you want with A4Docs and share with friends in easy way.</span>
      </BottomContainer>
    </Wrapper>
  )
}));

export default Hero;
