import React from 'react';
import styled from 'styled-components';

import { ReactComponent as QuotesSvg } from '../images/quotes.svg';

const Wrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 210px;
`;

const QuotesSvgElement = styled(QuotesSvg)`
  opacity: 0.1;
`;

const List = styled.div`
  margin-top: 70px;
`;

const Item = styled.div`
  
`;

const TextWrapper = styled.div`
  width: 50%;
  padding-right: 10px;
  position: relative;
`;

const Text = styled.p`
  font-size: 42px;
  line-height: 50px;
  font-weight: bold;
`;

const Author = styled.span`
  position: absolute;
  top: 100%;
  left: 100%;
  width: 100%;
  margin-top: -27px;
`;

const Reviews = () => {

  return (
    <Wrapper className="section">
      <div className="container">
        <QuotesSvgElement />
        <List>
          <Item>
            <TextWrapper>
              <Text>We deliver 100% and provide instant response to help you succeed.</Text>
              <Author>Ann Batlers, <br/>Content Manager at LALAJS</Author>
            </TextWrapper>
          </Item>
        </List>
      </div>
    </Wrapper>
  )
};

export default Reviews;
