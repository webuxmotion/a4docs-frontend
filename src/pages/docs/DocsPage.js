import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import FullscreenWrapper from '../../components/FullscreenWrapper';

import { variables } from '../../constants';
import Link from '../../components/Link';
import DocPreview from '../../components/DocPreview';

const Header = styled.div`
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: ${variables.fontSecondary};
  line-height: 36px;
  font-size: 48px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Section = styled.div`
  padding-top: 80px;
`;

const DocPreviewWrapper = styled.div`
  width: 20%;
  padding: 10px;
`;

const DocList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  margin-left: -10px;
  margin-right: -10px;
`;

const CreateDocPage = inject('stateStore', 'routerStore')(observer(({ stateStore }) => {
  
  const localDocsObj = JSON.parse(stateStore.state.localDocs);
  
  return (
    <FullscreenWrapper>
      <Section className="section">
        <Header>
          <Title>Local docs</Title>
        </Header>
        <DocList>
          { Object.keys(localDocsObj).map(alias => {
            const doc = localDocsObj[alias];

            return (
              <DocPreviewWrapper key={alias}>
                <Link to={`/list/${alias}`}>
                  <DocPreview title={doc.title} />
                </Link>
              </DocPreviewWrapper>
            )
          })}
        </DocList>
      </Section>
    </FullscreenWrapper>
  );
}));

export default CreateDocPage;
