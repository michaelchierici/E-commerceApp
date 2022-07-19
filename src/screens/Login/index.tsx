/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container} from '../../style/base';
import {
  ContentField,
  LoginButton,
  LoginText,
  PasswordInput,
  UserNameInput,
} from './style';
import Logo from '../../assets/pokeballLogin.svg';

export const Login = () => {
  return (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <ContentField>
        <Logo width={100} height={100} />
        <UserNameInput placeholder="Username" />
        <PasswordInput placeholder="Senha" />
        <LoginButton>
          <LoginText>Entrar</LoginText>
        </LoginButton>
      </ContentField>
    </Container>
  );
};
