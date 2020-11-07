import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckIcon } from '../icons/check-icon.svg';

const Wrapper = styled.label`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  opacity: ${({ disabled }) => disabled ? '0.6' : '1'}
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 3px;
  margin-right: 8px;
`;

const Input = styled.input`
  display: none;

  &:checked + .checkbox-box .checkbox-icon {
    display: block;
  } 
`;

const Label = styled.span`
  white-space: nowrap;
`;

const Icon = styled(CheckIcon)`
  display: none;
`;

const CheckBox = ({ label, checked, onChange, disabled }) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <Wrapper disabled={disabled}>
      <Input type="checkbox" checked={isChecked} onChange={onChange} />
      <Box className="checkbox-box">
        <Icon className="checkbox-icon" />
      </Box>
      {label ?
        <Label>{label}</Label>
      : null}
    </Wrapper>
  )
};

export default CheckBox;