import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  background-color: white;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  padding-bottom: 170px;
  height: 100%;
  box-sizing: border-box;
`;

const WaveWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 25px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 0;
  color: #8E8E8E;
  font-size: 18px;
  line-height: 22px;
`;

const IconBox = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 68px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color ?? '#E9E5FF'};
  flex-shrink: 0;
  position: absolute;
  bottom: 53px;
  z-index: 20;
  left: 50%;
  transform: translateX(-50%);
`;

const ServiceCard = ({ Icon, Wave, circleColor, title, text }) => (
  <Wrapper>
    <IconBox color={circleColor}>
      <Icon />
    </IconBox>
    <Content>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Content>
    <WaveWrapper>
      <Wave style={{ width: "100%", display: "block" }} />
    </WaveWrapper>
  </Wrapper>
);

export default ServiceCard;