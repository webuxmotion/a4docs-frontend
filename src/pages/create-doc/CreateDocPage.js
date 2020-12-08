import React, { Component } from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import ErrorMessage from '../../components/ErrorMessage';
import FullscreenWrapper from '../../components/FullscreenWrapper';
import DocLayout from '../../components/DocLayout';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
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
`;

const EditableTitle = styled.h2`
  font-size: 36px;
  line-height: 45px;
  display: inline-block;
  outline: none;
`;

const EditableContent = styled.p`
  display: inline-block;
  outline: none;
`;

@inject('docsStore', 'routerStore')
class CreateDocPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      errorMessage: null,
    };
  }

  handleSubmitDoc = async () => {
    const { docsStore, routerStore } = this.props;
    const { title, content } = this.state;

    try {
      await docsStore.createDoc(title, content);
      routerStore.push('/docs');
    } catch (error) {
      const errorMessage = error.response.data.message;
      this.setState({ errorMessage });
    }
  };

  submit = (e) => {
    e.preventDefault();
    
    this.handleSubmitDoc();
  };

  render() {
    return (
      <FullscreenWrapper>
        <Section className="section">
          <Header>
            <Title>Create</Title>
            <SaveButton>Save</SaveButton>
          </Header>
          <DocPaper>
            <div>
              <EditableTitle contentEditable="true">Title</EditableTitle>
            </div>
            <div style={{ paddingTop: "20px" }}>
              <EditableContent contentEditable="true">Content</EditableContent>
            </div>
          </DocPaper>
        </Section>
      </FullscreenWrapper>
    );
  }
}

export default CreateDocPage;
