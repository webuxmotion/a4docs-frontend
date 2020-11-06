import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: white;
  border-radius: 100px;
  cursor: pointer;
  border: none;
  height: 72px;
  min-width: 150px;
  color: #472BF3;
  font-size: 24px;
  font-weight: bold;
  padding-right: 48px;
  padding-left: 48px;
  display: inline-flex;
  align-items: center;

  &:hover {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  }
`;

const IconRightWrapper = styled.span`
  margin-left: 20px;
`;

const Button = ({ children, onClick, IconRight, type = "button" }) => (
  <ButtonWrapper onClick={onClick} type={type}>
    {children}
    {IconRight && (
      <IconRightWrapper>
        <IconRight style={{ display: 'block'}} />
      </IconRightWrapper>
    )}
  </ButtonWrapper>
);

export default Button;