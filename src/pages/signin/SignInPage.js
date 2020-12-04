import React, { Component } from 'react';
import styled from 'styled-components';
import { inject } from 'mobx-react';

import { ReactComponent as ArrowIcon } from '../../icons/arrow-icon.svg';

import ErrorMessage from '../../components/ErrorMessage';
import FullscreenWrapper from '../../components/FullscreenWrapper';
import Title from '../../components/Title';
import FormField from '../../components/FormField';
import Button from '../../components/Button';
import Link from '../../components/Link';
import LoginSignup from '../../components/LoginSignup';
import bp from '../../constants/bp';

import './SignInPage.scss';

const FormContainer = styled.form`
  max-width: 480px;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  border-radius: 5px;
  box-sizing: border-box;

  ${bp.from2to1} {
    padding-right: 20px;
    padding-left: 20px;
  }
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
class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMesssage: null,
    };
  }

  submit = async (e) => {
    e.preventDefault();
    
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
      <FullscreenWrapper>
        <LoginSignup>
          <Title center>Login</Title>  
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
                Login
              </Button>
            </ButtonWrapper>

            <BottomTextWrapper>
              <p>Don't have an account? <Link to="/signup">Create account</Link></p>
            </BottomTextWrapper>
            
          </FormContainer>
        </LoginSignup>
      </FullscreenWrapper>
    );
  }
}

export default SignInPage;
