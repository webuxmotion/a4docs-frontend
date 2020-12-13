import React from 'react';
import { withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ContentEditable from "react-contenteditable";

import { ReactComponent as EditIconSvg } from '../../icons/edit-icon.svg';
import FullscreenWrapper from '../../components/FullscreenWrapper';

import { variables } from '../../constants';
import { UnderlinedLink } from '../../components';

const UnderlinedLinkWrapper = styled(UnderlinedLink)`
  position: absolute;
  left: 0;
  bottom: 3px;
`;

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
  left: 180px;
`;

const Section = styled.div`
  padding-top: 80px;
`;

const DocPaper = styled.div`
  width: 67.4%;
  height: 1000px;
  background-color: white;
  padding-top: 60px;
  padding-left: 50px;
  color: black;
  position: relative;
`;

const EditableTitle = styled(ContentEditable)`
  font-size: 36px;
  line-height: 45px;
  display: inline-block;
  outline: none;
`;

const EditableContent = styled(ContentEditable)`
  display: inline-block;
  outline: none;
`;

const EditIcon = styled(EditIconSvg)`
  position: absolute;
  top: 10px;
  right: 33px;
  cursor: pointer;
`;

const CreateDocPage = inject('stateStore', 'routerStore')(observer(({ stateStore, routerStore, match }) => {
  const alias = match.params.id;
  const localDocs = JSON.parse(stateStore.state.localDocs);
  
  const { title, content } = localDocs[alias] || {};
  
  return (
    <FullscreenWrapper>
      <Section className="section">
        <Header>
          <UnderlinedLinkWrapper
            to="/list"
            text="Local docs"
          />
          <Title>- View</Title>
        </Header>
        { title || content ? (
          <DocPaper>
            <div>
              <EditableTitle
                html={title}
                disabled={true}
              />
            </div>
            <div style={{ marginTop: '20px'}}>
              <EditableContent
                html={content}
                disabled={true}
              />
            </div>
            <EditIcon onClick={() => routerStore.push(`/list/${alias}/edit`)} />
          </DocPaper>
          ) :
          <span>Doc not found</span>
        }
      </Section>
    </FullscreenWrapper>
  );
}));

export default withRouter(CreateDocPage);
