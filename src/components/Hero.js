import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import bp from '../constants/bp';
import Button from './Button';
import { ReactComponent as ArrowIcon } from '../icons/arrow-icon.svg';
import heroImage from '../images/hero-image.png';

const Wrapper = styled.div`
  background: linear-gradient(229.45deg, #8486FF 15.33%, #4529F3 93.33%);
  padding-top: 100px;
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

const Cell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  flex-basis: 0;
  padding-right: 20px;

  ${bp.from2to1} {
    align-items: center;
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
`;

const Title = styled.div`
  color: white;
  font-size: 40px;
  max-width: 460px;
  margin-bottom: 30px;
  font-weight: bold;
`;

const Description = styled.div`
  color: white;
  max-width: 300px;
  font-size: 20px;
  margin-bottom: 40px;
`;

const Hero = inject('routerStore', 'userStore')(observer(({ routerStore, userStore: { username } }) => {

  return (
    <Wrapper>
      <Container className="container">
        <Cell>
          <Title>Create A4 documents and share with people with fun</Title>
          <Description>Save what you want with A4Docs and share with friends in easy way</Description>
          <Button
            IconRight={!username ? ArrowIcon : null}
            onClick={() => routerStore.push(username ? '/docs' : '/signin')}
          >
            {username ? 'See documents' : 'Login now'}
          </Button>
        </Cell>
        <CellWithImage>
          <img src={heroImage} alt="Documents hero composition" />
        </CellWithImage>
      </Container>
    </Wrapper>
  )
}));

export default Hero;
