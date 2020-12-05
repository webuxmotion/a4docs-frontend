import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Button from './Button';
import Title from './Title';
import AboutCard from './AboutCard';

import bp from '../constants/bp';

const Wrapper = styled.div`
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: white;

  ${bp.mobile} {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 100px;

  ${bp.mobile} {
    padding-top: 30px;
  }
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

  ${bp.from2to1} {
    width: 100%;
  }
`;

const Hero = inject('userStore')(observer(({ userStore: { username } }) => {

  return (
    <Wrapper>
      <div className="container">
        <Title center theme="dark">Platform features</Title>

        <Items>
          <Item>
            <AboutCard 
              color="#DDDBFE" 
              title="Add doc. Login after" 
              text="You can also add new docs, when you do not loggined"
            />
          </Item>
          <Item>
            <AboutCard 
              color="#FEDCDA"
              title="Like list" 
              text="You can like docs, and this liked docs will be saved in your like list"
            />
          </Item>
          <Item>
            <AboutCard 
              color="#FDE1B7"
              title="Comment blocks" 
              text="You can comment any block in your document and public docs"
            />
          </Item>
          <Item>
            <AboutCard 
              color="#D9D8F6"
              title="Share docs"
              text="You can make your docs private, public or shared by link"
            />
          </Item>
        </Items>

        <ButtonWrapper>
          <Button
            to={username ? '/docs' : '/signup'}
            theme="secondary"
          >
            {username ? 'Documents' : 'Sign Up'}
          </Button>
        </ButtonWrapper>

      </div>
    </Wrapper>
  )
}));

export default Hero;
