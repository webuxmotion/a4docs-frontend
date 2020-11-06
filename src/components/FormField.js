import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(256, 256, 256, 0.4);
  outline: none;
  font-size: 26px;
  padding: 5px 0;
  box-sizing: border-box;

  &:focus {
    border-bottom: 1px solid rgba(256, 256, 256, 1);
  }
`;

const Label = styled.label`
  color: white;
  font-weight: bold;
`;

const FormField = ({ value, type, id, label, onChange }) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input id={id} type={type} value={value} onChange={onChange} />
  </FormGroup>
);

export default FormField;