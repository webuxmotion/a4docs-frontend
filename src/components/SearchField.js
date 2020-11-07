import React from 'react';
import styled from 'styled-components';

import { ReactComponent as SearchIcon } from '../icons/search-icon.svg';

const Wrapper = styled.div`
  width: 250px;
  position: relative;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid white;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  padding: 6px 0;
  padding-left: 30px;
  font-size: 20px;
  color: white;
`;

const Icon = styled(SearchIcon)`
  position: absolute;
  bottom: 10px;
  pointer-events: none;
`;

const SearchField = ({ onChange, value }) => (
  <Wrapper>
    <Icon />
    <Input type="text" onChange={onChange} value={value} />
  </Wrapper>
);

export default SearchField;