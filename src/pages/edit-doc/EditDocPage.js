import React, { useState } from 'react';
import { withRouter } from "react-router";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import ContentEditable from "react-contenteditable";

import FullscreenWrapper from '../../components/FullscreenWrapper';

import { variables } from '../../constants';

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

const SaveButton = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  margin-left: -400px;
  align-items: center;
  justify-content: center;
  background-color: var(--color-secondary);
  cursor: pointer;
  font-size: 16px;
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

const CreateDocPage = inject('stateStore', 'routerStore')(observer(({ stateStore, routerStore, match }) => {
  const alias = match.params.id;
  const localDocs = JSON.parse(stateStore.state.localDocs);

  const [title, setTitle] = useState(localDocs[alias].title);
  const [content, setContent] = useState(localDocs[alias].content);
  
  const handleChange = (evt, cb) => {
    cb(evt.target.value);
  };

  const handleSave = () => {
    const updatedDoc = stateStore.updateDoc({ alias, doc: { title, content } });

    routerStore.push(`/list/${updatedDoc.alias}`);
  }
  
  return (
    <FullscreenWrapper>
      <Section className="section">
        <Header>
          <Title>Edit</Title>
          <SaveButton onClick={handleSave}>Save</SaveButton>
        </Header>
        <DocPaper>
          <div>
            <EditableTitle
              html={title}
              disabled={false}
              onChange={(event) => handleChange(event, setTitle)}
            />
          </div>
          <div style={{ marginTop: '20px'}}>
            <EditableContent
              html={content}
              disabled={false}
              onChange={(event) => handleChange(event, setContent)}
            />
          </div>
        </DocPaper>
      </Section>
    </FullscreenWrapper>
  );
}));

export default withRouter(CreateDocPage);
