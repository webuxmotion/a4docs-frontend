import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const Wrapper = styled.div`
  padding-top: 70px;
`;

const TitleWrapper = styled.div`
  padding-bottom: 80px;
`;


const Feature = styled.div`
  border-top: 1px solid var(--color-primary);
  display: flex;
  padding-top: 20px;
  padding-bottom: 80px;
`;

const FeatureTitle = styled.p`
  font-size: 32px;
  font-weight: bold;
  width: 50%;
`;

const FeatureDescription = styled.p`
  margin-top: 4px;
  width: 50%;
  max-width: 350px;
`;

const Features = () => (
  <Wrapper className="section">
    <div className="container">
      <TitleWrapper>
        <Title>Platform <br/>features</Title>
      </TitleWrapper>
      <Feature>
        <FeatureTitle>Add doc. Login after</FeatureTitle>
        <FeatureDescription>You can also add new docs, when you do not loggined.</FeatureDescription>
      </Feature>
      <Feature>
        <FeatureTitle>Like list</FeatureTitle>
        <FeatureDescription>You can like docs, and this liked docs will be saved in your like list.</FeatureDescription>
      </Feature>
      <Feature>
        <FeatureTitle>Comment blocks</FeatureTitle>
        <FeatureDescription>You can comment any block in your document and public docs.</FeatureDescription>
      </Feature>
      <Feature>
        <FeatureTitle>Share docs</FeatureTitle>
        <FeatureDescription>You can make your docs private, public or shared by link</FeatureDescription>
      </Feature>
    </div>
  </Wrapper>
);

export default Features;
