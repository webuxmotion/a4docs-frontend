import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Button from './Button';
import Title from './Title';
import AboutCard from './AboutCard';

import { ReactComponent as About1 } from '../icons/about-1.svg';
import { ReactComponent as About2 } from '../icons/about-2.svg';
import { ReactComponent as About3 } from '../icons/about-3.svg';
import { ReactComponent as About4 } from '../icons/about-4.svg';
import { ReactComponent as ArrowIcon } from '../icons/arrow-icon.svg';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: white;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 100px;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding-top: 40px;
`;

const Item = styled.div`
  padding: 20px;
  width: 50%;
  box-sizing: border-box;
`;

const Hero = inject('userStore')(observer(({ userStore: { username } }) => {

  return (
    <Wrapper>
      <div className="container">
        <Title theme="dark">Innovative documents</Title>

        <Items>
          <Item>
            <AboutCard Icon={About1} title="Unique dedign" text="We deliver 100% and provide instant response to help you succeed." />
          </Item>
          <Item>
            <AboutCard Icon={About2} title="Digital branding & marketing" text="We deliver 100% and provide instant response to help you succeed." />
          </Item>
          <Item>
            <AboutCard Icon={About3} title="SEO & analytics" text="We deliver 100% and provide instant response to help you succeed." />
          </Item>
          <Item>
            <AboutCard Icon={About4} title="Digital branding & marketing" text="We deliver 100% and provide instant response to help you succeed." />
          </Item>
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