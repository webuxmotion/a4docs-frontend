import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import bp from '../constants/bp';
import Button from './Button';
import { ReactComponent as ArrowIcon } from '../icons/arrow-icon.svg';
import heroImage from '../images/hero-image.svg';

const Wrapper = styled.div`
  background: linear-gradient(229.45deg, #8486FF 15.33%, #4529F3 93.33%);
  padding-top: 120px;
  padding-bottom: 100px;

  ${bp.from2to1} {
    padding-bottom: 80px;
  }
`;

const Container = styled.div`
  display: flex;

  ${bp.from2to1} {
    flex-direction: column-reverse;
  }
`;

const ButtonWrapper = styled.div`
  display: block;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 0;
  padding-right: 20px;

  ${bp.from2to1} {
    flex-basis: auto;
    align-items: center;
    padding-right: 0;
    text-align: center;
  }
`;

const CellWithImage = styled(Cell)`
  align-items: center;
  padding-top: 30px;

  ${bp.from2to1} {
    padding-top: 0;
    padding-bottom: 30px;
    
    img {
      max-width: 200px;
    }
  }

  ${bp.mobile} {
    img {
      max-width: 120px;
    }
  }
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  line-height: 70px;
  max-width: 460px;
  margin-bottom: 30px;
  font-weight: bold;
  text-transform: uppercase;

  ${bp.from2to1} {
    font-size: 30px;
    line-height: 40px;
  }
`;

const Hero = inject('routerStore', 'userStore')(observer(({ routerStore, userStore: { username } }) => {

  return (
    <Wrapper>
      <Container className="container">
        <Cell>
          <Title>Save planet. <br/>Join docs<br/> online</Title>
          <ButtonWrapper>
            <Button
              onClick={() => routerStore.push(username ? '/docs' : '/signup')}
            >
              {username ? 'See documents' : 'Sign Up'}
            </Button>
          </ButtonWrapper>
        </Cell>
        <CellWithImage>
          <img src={heroImage} alt="Documents hero composition" />
        </CellWithImage>
      </Container>
    </Wrapper>
  )
}));

export default Hero;
