import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';

import './SignInPage.scss';
import { inject } from 'mobx-react';
import ErrorMessage from '../../components/ErrorMessage';

const Heading = styled.h1`
  margin-top: 0;
`;

const FormContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background-color: #edf4ff;
  padding: 30px;
  border-radius: 5px;
`;

const FormField = styled(TextField)`
  width: 100%;
`;

@inject('userStore', 'routerStore')
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMesssage: null,
    };
  }

  submit = async () => {
    this.setState({ errorMessage: null });
    const { username, password } = this.state;

    try {
      await this.props.userStore.signin(username, password);
      this.props.routerStore.push('/docs');
    } catch (error) {
      const errorMessage = error.response.data.message;
      this.setState({ errorMessage });
    }
  };

  goToSignUp = () => {
    this.props.routerStore.push('/signup')
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <div className="fullscreen-wrapper">
        <FormContainer>
          <Heading>A4Docs Login</Heading>
          
          {errorMessage && <ErrorMessage message={this.state.errorMessage} />}

          <div>
            <FormField
              id="outlined-name"
              label="Username"
              margin="dense"
              variant="outlined"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <FormField
              id="outlined-name"
              label="Password"
              margin="dense"
              variant="outlined"
              type="password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          <hr/>
          <div>
            <Button
              style={{ marginBottom: '10px' }}
              fullWidth
              variant="contained"
              color="primary"
              onClick={this.submit}
            >
              SIGN IN
            </Button>

            <Button fullWidth onClick={this.goToSignUp}>
              SIGN UP
            </Button>
          </div>
        </FormContainer>
      </div>
    );
  }
}

export default SignInPage;
