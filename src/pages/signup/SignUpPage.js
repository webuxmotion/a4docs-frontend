import React, { Component } from 'react';
import styled from 'styled-components';

import './SignUpPage.scss';
import { inject } from 'mobx-react';
import ErrorMessage from '../../components/ErrorMessage';

import { ReactComponent as ArrowIcon } from '../../icons/arrow-icon.svg';

import FullscreenWrapper from '../../components/FullscreenWrapper';
import Title from '../../components/Title';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Link from '../../components/Link';
import LoginSignup from '../../components/LoginSignup';

const FormContainer = styled.form`
  max-width: 480px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  border-radius: 5px;
  box-sizing: border-box;
`;

const FormFieldWrapper = styled.div`
  padding-bottom: 28px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  padding-top: 20px;
`;

const BottomTextWrapper = styled.div`
  text-align: center;
  color: white;
  padding-top: 30px;
`;

@inject('userStore', 'routerStore')
class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMessage: null,
    };
  }

  submit = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    try {
      await this.props.userStore.signup(username, password);
      this.props.routerStore.push('/signin');
    } catch (error) {
      const errorMessage = error.response.data.message;
      this.setState({ errorMessage });
    }
  };

  render() {
    const { errorMessage } = this.state;

    return (
      <FullscreenWrapper>
        <LoginSignup signup>
            <Title center>Create account</Title>  
          <FormContainer onSubmit={this.submit}>
            {errorMessage && <ErrorMessage message={this.state.errorMessage} />}

            <FormFieldWrapper>
              <FormField
                id="username"
                label="username"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </FormFieldWrapper>

            <FormFieldWrapper>
              <FormField
                id="password"
                label="password"
                type="password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </FormFieldWrapper>

            <ButtonWrapper>
              <Button
                IconRight={ArrowIcon}
                type="submit"
              >
                Create
              </Button>
            </ButtonWrapper>
           
            <BottomTextWrapper>
              <p>Have an account? <Link to="/signin">Login</Link></p>
            </BottomTextWrapper>

          </FormContainer>
        </LoginSignup>
      </FullscreenWrapper>
    );
  }
}

export default SignUpPage;
