import React, { Component } from 'react';
import { TextField, FormControl, Button } from '@material-ui/core';
import styled from 'styled-components';
import { inject } from 'mobx-react';
import ErrorMessage from '../../components/ErrorMessage';

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
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

  render() {
    return (
      <FormWrapper>
        <FormContainer>
          <h1>Create a new doc</h1>
          <p>Fill the title and content please.</p>

          { this.state.errorMessage && <ErrorMessage message={this.state.errorMessage} />}

          <FormControl fullWidth>
            <TextField
              label="Title"
              placeholder="Title"
              margin="normal"
              variant="outlined"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Content"
              placeholder="Content"
              multiline
              rows="8"
              margin="normal"
              variant="outlined"
              onChange={e => this.setState({ content: e.target.value })}
            />
          </FormControl>

          <Button
            style={{ marginTop: '10px' }}
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmitDoc}
          >
            CREATE DOC
          </Button>
        </FormContainer>
      </FormWrapper>
    );
  }
}

export default CreateDocPage;
