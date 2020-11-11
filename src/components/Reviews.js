import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import ReviewCard from './ReviewCard';

import avatar1 from '../images/reviews/review-1.jpg';
import avatar2 from '../images/reviews/review-2.jpg';
import avatar3 from '../images/reviews/review-3.jpg';

const Wrapper = styled.div`
  padding-top: 120px;
  background-color: white;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`;

const FirstCard = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 90px;
  padding-top: 30px;
  padding-bottom: 60px;
`;

const SecondCard = styled.div`
  display: flex;
  padding-bottom: 110px;
  padding-left: 50px;
`;

const ThirdCard = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: -50px;
`;

const Items = styled.div`
  position: relative;
`;

const Reviews = () => {

  return (
    <Wrapper>
      <div className="container">
        <Items>
          <TitleWrapper>
            <Title theme="dark">Reviews</Title>
          </TitleWrapper>
          <FirstCard>
            <ReviewCard 
              avatarImage={avatar1}
              message="We deliver 100% and provide instant response to help you succeed."
              name="Andrii Pereverziev"
              position="Business Consultant @ Google"
            />
          </FirstCard>
          <SecondCard>
            <ReviewCard 
              avatarImage={avatar2}
              message="We deliver 100% and provide instant response to help you succeed."
              name="Andrii Pereverziev"
              position="Business Consultant @ Google"
            />
          </SecondCard>
          <ThirdCard>
            <ReviewCard 
              avatarImage={avatar3}
              message="We deliver 100% and provide instant response to help you succeed."
              name="Andrii Pereverziev"
              position="Business Consultant @ Google"
            />
          </ThirdCard>
        </Items>
      </div>
    </Wrapper>
  )
};

export default Reviews;