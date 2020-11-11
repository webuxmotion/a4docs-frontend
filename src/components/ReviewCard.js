import React from 'react';
import styled from 'styled-components';

import { ReactComponent as QuotesIcon } from '../icons/quotes-icon.svg';

const Wrapper = styled.div`
  display: inline-flex;
  background-color: white;
  padding-right: 160px;
  padding-bottom: 45px;
  padding-left: 48px;
  padding-top: 50px;
  box-shadow: 0px 15px 83px rgba(0, 0, 0, 0.06);
  position: relative;
  box-sizing: border-box;
  max-width: 600px;
`;

const Icon = styled(QuotesIcon)`
  position: absolute;
  bottom: 34px;
  right: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Message = styled.p`
  margin: 0;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  position: absolute;
  top: -30px;
  left: -42px;
  width: 84px;
  height: 84px;
  border-radius: 42px;
`;

const AuthorName = styled.p`
  margin: 0;
  font-weight: bold;
  margin-bottom: 3px;
`;

const AuthorPosition = styled.p`
  margin: 0;
  color: #838383;
`;

const ReviewCard = ({ avatarImage, message, name, position }) => (
  <Wrapper>
    <Avatar src={avatarImage} alt="Avatar" />
    <Icon />
    <Content>
      <Message>{message}</Message>
      <AuthorName>{name}</AuthorName>
      <AuthorPosition>{position}</AuthorPosition>
    </Content>
  </Wrapper>
);

export default ReviewCard;