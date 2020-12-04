import React from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

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

const ThemeSecondary = styled(ButtonWrapper)`
  color: #472BF3;
  background-color: #E9E5FF;

  &:hover {
    box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.02);
  }
`;

const IconRightWrapper = styled.span`
  margin-left: 20px;
`;

const ThemedButton = ({ routerStore, children, to, ...rest }) => {
  switch (rest.theme) {
    case "secondary":
      return (
        <ThemeSecondary {...rest}>
          {children}
        </ThemeSecondary>
      )
    default:
      return (
        <ButtonWrapper {...rest}>
          {children}
        </ButtonWrapper>
      )
  }
};

const Button = inject('routerStore')(observer(({ routerStore, children, IconRight, type = "button", to, ...rest }) => (
  <ThemedButton type={type} {...rest} onClick={to ? () => routerStore.push(to) : rest?.onClick}>
    {children}
    {IconRight && (
      <IconRightWrapper>
        <IconRight style={{ display: 'block'}} />
      </IconRightWrapper>
    )}
  </ThemedButton>
)));

export default Button;
