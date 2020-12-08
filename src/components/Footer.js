import React from 'react';
import styled from 'styled-components';
import { variables } from '../constants';

const Wrapper = styled.div`
  padding-top: 60px;
  background: var(--color-primary);
`;

const Top = styled.div`
  display: flex;
  color: white;
`;

const TopCell = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 32px;
  color: white;
`;

const Bottom = styled.div`
  color: var(--color-secondary);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 120px;
  overflow: hidden;
`;

const ShortLogo = styled.h3`
  font-size: 56px;
  line-height: 60px;
  font-family: ${variables.fontSecondary};
  margin-bottom: -10px;
`;

const Copyright = styled.span`
  font-size: 16px;
`;

const Footer = () => {

  return (
    <Wrapper className="section">
      <Top>
        <TopCell>
          <Title>Contacts</Title>
        </TopCell>
        <TopCell>
          <span>hello@gmail.com</span>
          <span>+38 095 123 45 67</span>
        </TopCell>
      </Top>
      <Bottom>
        <ShortLogo>A4D</ShortLogo>
        <Copyright>© A4Docs</Copyright>
      </Bottom>
    </Wrapper>
  )
};

export default Footer;
