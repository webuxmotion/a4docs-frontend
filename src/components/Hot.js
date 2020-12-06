import React, { useState } from 'react';
import styled from 'styled-components';

import imageFlame from '../images/flame.png';
import imageClose from '../images/close-small.png';
import { variables, bp } from '../constants';
import Link from './Link';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${variables.hotColor};
  align-items: stretch;
  z-index: 40;
`;

const Content = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Text = styled.h2`
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 24px;

  ${bp.from2to1} {
    font-size: 20px;
  }
`;

const FlameIcon = styled.img`
  position: relative;
`;

const CloseIconWrapper = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Hot = () => {
  const [visible, setVisible] = useState(!localStorage.getItem('hot-disable'));

  const handleClick = () => {
    localStorage.setItem('hot-disable', true);
    setVisible(false);
  }

  return visible ? 
    <Wrapper>
      <Content to="/signup" preRouter={handleClick}>
        <Text>HOT WINTER</Text>
        <FlameIcon src={imageFlame} />
        <Text>50% OFF</Text>
      </Content>
      <CloseIconWrapper onClick={handleClick}>
        <img alt="close button" src={imageClose} />
      </CloseIconWrapper>
    </Wrapper> :
    null
};

export default Hot;
