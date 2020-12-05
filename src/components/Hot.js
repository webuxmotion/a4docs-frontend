import React from 'react';
import styled from 'styled-components';

import imageFlame from '../images/flame.png';
import imageClose from '../images/close-small.png';
import bp from '../constants/bp';
import colors from '../constants/styles-variables';
import Link from './Link';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.hotColor};
  align-items: stretch;
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

const Hot = () => (
  <Wrapper>
    <Content to="/hot">
      <Text>HOT WINTER</Text>
      <FlameIcon src={imageFlame} />
      <Text>50% OFF</Text>
    </Content>
    <CloseIconWrapper>
      <img alt="close button" src={imageClose} />
    </CloseIconWrapper>
  </Wrapper>
);

export default Hot;
