import React from 'react';
import styled from 'styled-components';
import bp from '../constants/bp';

const Wrapper = styled.div`
  display: flex;

  ${bp.mobile} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 36px;
  padding-right: 20px;
  max-width: 300px;

  ${bp.mobile} {
    max-width: 100%;
    padding-right: 0;
    padding-left: 0;
  }
`;

const IconBox = styled.div`
  width: 125px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 125px;
  background-color: ${({ color }) => color};
  flex-shrink: 0;

  ${bp.mobile} {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
  font-weight: 400;
  margin-top: 5px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #8E8E8E;
  margin: 0;
  margin-top: 18px;
`;

const AboutCard = ({ Icon, title, text, color }) => (
  <Wrapper>
    <IconBox color={color}></IconBox>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Wrapper>
);

export default AboutCard;
