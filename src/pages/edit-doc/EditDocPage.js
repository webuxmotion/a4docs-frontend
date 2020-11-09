import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

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
@observer
class EditDocPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      content: '',
      errorMessage: null,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    
    await this.props.docsStore.fetchDoc(id);

    const doc = this.props.docsStore.doc;

    this.setState({
      title: doc.title,
      content: doc.content,
      id: doc.id
    });
  }

  handleSubmitDoc = async () => {
    const { docsStore, routerStore } = this.props;
    const { title, content, id } = this.state;

    try {
      await docsStore.updateDoc(id, title, content);
      routerStore.push(`/docs/view/${id}`);
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
    const id = this.props.docsStore?.doc?.id;

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
                  value={this.state.title}
                  onChange={e => this.setState({ title: e.target.value })}
                />
              </TitleFieldWrapper>
            )}
            backButtonClickHandler={() => this.props.routerStore.push(`/docs/view/${id}`)}
            pageTitle="Edit docu ment"
          >
            <FormWrapper>
              <FormField
                id="content"
                label="content"
                value={this.state.content}
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

export default EditDocPage;
