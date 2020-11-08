import React from 'react';
import styled from 'styled-components';

import { ReactComponent as BackIcon } from '../icons/back-icon.svg';

const Wrapper = styled.div`
  background-color: white;
  width: 88px;
  height: 88px;
  border-radius: 100px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
  box-sizing: border-box;
`;

const BackButton = ({ onClick }) => (
  <Wrapper onClick={onClick}>
    <BackIcon />
  </Wrapper>
);

export default BackButton;