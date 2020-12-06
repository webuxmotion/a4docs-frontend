import React from 'react';
import styled from 'styled-components';

import { variables, bp } from '../constants';
import Link from './Link';

const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  width: 60px;
  height: 60px;
  background-color: var(--color-secondary);
  position: relative;

  &:after, &:before {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: var(--color-primary);
  }

  &:before {
    transform: rotate(90deg) translateX(1px);
  }
`;

const Text = styled.span`
  color: var(--color-primary);
  font-size: 16px;
  margin-right: 9px;
`;

const AddDocButton = () => (
  <LinkButton to="/add-doc">
    <Text>Add doc</Text>
    <Icon/>
  </LinkButton>
);

export default AddDocButton;
