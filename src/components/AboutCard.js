import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 36px;
  padding-right: 20px;
  max-width: 300px;
`;

const IconBox = styled.div`
  width: 125px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #E9E5FF;
  flex-shrink: 0;
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

const AboutCard = ({ Icon, title, text }) => (
  <Wrapper>
    <IconBox>
      <Icon />
    </IconBox>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
  </Wrapper>
);

export default AboutCard;