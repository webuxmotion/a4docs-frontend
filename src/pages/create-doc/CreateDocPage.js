import React, { Component } from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import ErrorMessage from '../../components/ErrorMessage';
import FullscreenWrapper from '../../components/FullscreenWrapper';
import DocLayout from '../../components/DocLayout';
import FormField from '../../components/FormField';
import Button from '../../components/Button';

const TitleFieldWrapper = styled.div`
  padding-left: 35px;
  padding-bottom: 30px;
  width: 390px;
`;

const ButtonWrapper = styled.div`
  padding-top: 35px;
`;

const FormWrapper = styled.div`
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 35px;
  width: 390px;
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
        <form onSubmit={this.submit}>
        <DocLayout
          paperTheme="color"
          title={(
            <TitleFieldWrapper>
              <FormField
                id="title"
                label="title"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </TitleFieldWrapper>
          )}
          backButtonClickHandler={() => this.props.routerStore.push('/docs')}
        >
          <FormWrapper>
            <FormField
              id="content"
              label="content"
              onChange={e => this.setState({ content: e.target.value })}
            />

            {this.state.errorMessage && <ErrorMessage message={this.state.errorMessage} />}

            <ButtonWrapper>
              <Button
                type="submit"
              >
                Save
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        </DocLayout>
        </form>
      </FullscreenWrapper>
    );
  }
}

export default CreateDocPage;
