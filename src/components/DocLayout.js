import React from 'react';
import styled from 'styled-components';

import DocPaper from './DocPaper';
import BackButton from './BackButton';
import Badge from './Badge';

const Wrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: -12px;
  left: 40px;
`;

const PageTitle = styled.h2`
  color: white;
  font-size: 45px;
  font-weight: bold;
  width: 135px;
`;

const Title = styled.div`
  width: 720px;
  margin: 0 auto;
`;

const Body = styled.div`
  display: flex;
`;

const Side = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  position: relative;
  flex-shrink: 0;
`;

const SideWrapper = styled(Side)`
  align-items: flex-end;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
`;

const PaperWrapper = styled.div`
  width: 720px;
  flex-shrink: 0;
  flex-basis: 1;
`;

const DocLayout = ({ 
  children, 
  personal, 
  title, 
  paperTheme, 
  rightSideContent, 
  backButtonClickHandler,
  pageTitle
}) => (
  <Wrapper>
    <Title>
      {title}
    </Title>
    <Body>
      <SideWrapper>
        <BackButton onClick={backButtonClickHandler} />
        {pageTitle ? <PageTitle>{pageTitle}</PageTitle> : null}
      </SideWrapper>
      <PaperWrapper>
        <DocPaper theme={paperTheme}>
          {personal === 'FALSE' ? <BadgeWrapper><Badge>public</Badge></BadgeWrapper> : null}
          {children}
        </DocPaper>
      </PaperWrapper>
      <Side>
        {rightSideContent}
      </Side>
    </Body>
  </Wrapper>
);

export default DocLayout;