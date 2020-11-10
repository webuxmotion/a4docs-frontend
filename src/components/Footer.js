import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Button from './Button';
import Title from './Title';
import Menu from './Menu';

import { ReactComponent as ArrowIcon } from '../icons/arrow-icon.svg';

const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 20px;
  background: linear-gradient(245.17deg, #8486FF 29.42%, #4529F3 101.91%);
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 100px;
`;

const Bottom = styled.div`
  border-top: 1px solid rgba(256, 256, 256, 0.2);
  padding-top: 30px;
  padding-bottom: 10px;
`;

const Cell = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Text = styled.p`
  color: #F2F2F2;
  font-size: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  line-height: 30px;

  span {
    white-space: nowrap;
  }
`;

const Footer = inject('userStore')(observer(({ userStore: { username } }) => {

  return (
    <Wrapper>
      <div className="container">
        <Top>
          <Cell style={{ width: '20%' }}>
            <Title>Have a question?</Title>
          </Cell>
          <Cell style={{ paddingRight: '20px' }}>
            <Text>
              <span>301 The Greenhouse,</span>
              <span>Gustard Factory, London</span>
            </Text>
          </Cell>
          <Cell style={{ paddingRight: '20px' }}>
            <Text>
              <span>Email: pereverziev.andrii@gmail.com</span>
              <span>Phone: +38 (095) 134 33 38</span>
            </Text>
          </Cell>
          <Cell>
            <Button
              IconRight={!username ? ArrowIcon : null}
              to={username ? '/docs' : '/signin'}
              theme="secondary"
            >
              {username ? 'Documents' : 'Login'}
            </Button>
          </Cell>
        </Top>
        <Bottom>
          <Menu />
        </Bottom>
      </div>
    </Wrapper>
  )
}));

export default Footer;