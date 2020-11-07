import React from 'react';
import styled, { css } from 'styled-components';

import dog1 from '../images/dog-1.jpg';
import dog2 from '../images/dog-2.jpg';
import rect1 from '../images/rect-1.png';
import rect2 from '../images/rect-2.png';

import dashed1 from '../images/dashed-1.svg';
import dashed2 from '../images/dashed-2.svg';
import dashed3 from '../images/dashed-3.svg';
import dashed4 from '../images/dashed-4.svg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 150px;
  align-items: flex-start;
`;

const imagesStyle = css`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;

  img {
    object-fit: fill;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const LeftImages = styled.div`
  ${imagesStyle}
`;

const RightImages = styled.div`
  ${imagesStyle}
  justify-content: flex-end;
`;

const FormWrapper = styled.div`
  flex-grow: 1;
`;

const LoginSignup = ({ children, signup }) => {

  const image1 = signup ? dashed1 : rect1;
  const image2 = signup ? dashed2 : dog1;
  const image3 = signup ? dashed3 : dog2;
  const image4 = signup ? dashed4 : rect2;

  return (
    <Wrapper>
  
      <LeftImages>
        <img src={image1} alt="rect-1" />
        <img src={image2} alt="dog-1" style={{ marginLeft: '24px'}} />
      </LeftImages>
  
      <FormWrapper>
        {children}
      </FormWrapper>
  
      <RightImages>
        <img src={image3} alt="dog-2" style={{ marginRight: '24px'}} />
        <img src={image4} alt="rect-2" />
      </RightImages>
  
    </Wrapper>
  )
};

export default LoginSignup;