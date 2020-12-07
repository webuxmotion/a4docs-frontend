import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DocPreviewIcon } from '../images/doc-preview.svg';
import { ReactComponent as EyeIcon } from '../icons/eye-icon.svg';

import { bp, variables } from '../constants';


const Wrapper = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {

    &:after {
      transform: translateY(0px);
    }
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 10px;
    background-color: var(--color-secondary);
    transform: translateY(10px);
  }
`;

const Title = styled.h2`
  position: absolute;
  z-index: 2;
  font-size: 32px;
  line-height: 37px;
  bottom: 50%;
  left: 5%;
`;

const Author = styled.p`
  position: absolute;
  z-index: 2;
  bottom: 12%;
  left: 5%;
`;

const Views = styled.span`
  position: absolute;
  z-index: 2;
  font-size: 16px;
  bottom: 3%;
  right: 5%;
  display: flex;
  align-items: center;

  svg {
    width: 16px !important;
    margin-right: 5px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  svg {
    width: 100%;
    height: auto;
    display: block;

    #docPreviewTriangle {
      fill: var(--color-primary);
    }
  }
`;

const DocPreview = ({ title, author, views }) => (
  <Wrapper>
    <ImageWrapper>
      <DocPreviewIcon />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Views><EyeIcon />{views}</Views>
    </ImageWrapper>
  </Wrapper>
);

export default DocPreview;
