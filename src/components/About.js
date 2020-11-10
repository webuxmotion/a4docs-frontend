import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Button from './Button';
import Title from './Title';

import { ReactComponent as ArrowIcon } from '../icons/arrow-icon.svg';

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Items = styled.div`
  display: flex;
`;

const Hero = inject('userStore')(observer(({ userStore: { username } }) => {

  return (
    <Wrapper>
      <div className="container">
        <Title theme="dark">Innovative documents</Title>

        <Items>
          dd
          aa
        </Items>

        <ButtonWrapper>
          <Button
            IconRight={!username ? ArrowIcon : null}
            to={username ? '/docs' : '/signin'}
            theme="secondary"
          >
            {username ? 'Documents' : 'Login now'}
          </Button>
        </ButtonWrapper>

      </div>
    </Wrapper>
  )
}));

export default Hero;