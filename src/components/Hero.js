import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import { variables, bp } from '../constants'
import heroImage from '../images/hero-image.png';

import { ReactComponent as CircleDotsIcon } from '../images/hero-text.svg';

const Wrapper = styled.div`
  background-color: var(--color-primary);
  overflow: hidden;
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
  width: 50%;
  padding-top: 80px;
  padding-left: 100px;

  img {
    width: 100%;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  padding-bottom: 100%;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 1500px;
    background-color: #c6bed2;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: auto;
  }
`;

const BottomContainer = styled.div`
  color: white;
  padding-top: 40px;
  padding-bottom: 50px;
  box-sizing: border-box;

  span {
    margin-left: 50%;
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
          <ImagePlaceholder>
            <img src={heroImage} alt="Documents hero slider" />
          </ImagePlaceholder>
        </CellWithImage>
      </Container>
      <BottomContainer className="container">
        <span>Save what you want with A4Docs and share with friends in easy way.</span>
      </BottomContainer>
    </Wrapper>
  )
}));

export default Hero;
