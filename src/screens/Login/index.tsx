/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ArrowButton,
  ContentField,
  CredentialInput,
  LoginButton,
  LoginText,
  MakeAccount,
} from './style';

import Logo from '../../assets/pokeballLogin.svg';

import {loginSchema} from '../../util/loginSchema';
import {useFormik} from 'formik';

import {IconButton} from 'react-native-paper';
import {useAuth} from '../../hooks/useAuth';

export const SignIn = () => {
  const [isAccountExist, setIsAccountExist] = useState(false);
  const [isNewAccount, setIsNewAccount] = useState(true);

  const {login} = useAuth();

  const handleValidSubmit = async (user: any, password: any) => {
    if (!user && !password) {
      return;
    }
    await login(user, password);
  };

  const singIn = () => {
    setIsAccountExist(true);
  };

  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    onSubmit: handleValidSubmit,
    validationSchema: loginSchema,
  });

  return (
    <ContentField>
      <Logo width={100} height={100} />
      <CredentialInput
        placeholder="Username"
        value={values?.user}
        onChangeText={handleChange('user')}
        onBlur={handleBlur('user')}
        placeholderTextColor="#c0c0c0"
      />
      <CredentialInput
        placeholder="Senha"
        value={values?.password}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        onSubmitEditing={handleSubmit}
        secureTextEntry={true}
        placeholderTextColor="#c0c0c0"
      />

      <LoginButton onPress={() => (isAccountExist ? handleSubmit : singIn())}>
        <LoginText style={{color: 'black'}}>
          {isAccountExist ? 'Entrar' : 'Possui conta?'}
        </LoginText>
      </LoginButton>
      {!isNewAccount && (
        <ArrowButton onPress={() => setIsNewAccount(true)}>
          <IconButton icon="arrow-left-thin" color="#fff" />
        </ArrowButton>
      )}
      {isNewAccount && (
        <MakeAccount
          onPress={async () => {
            handleSubmit();
            setIsNewAccount(false);
          }}>
          <LoginText>{isNewAccount ? 'Crie sua Conta' : 'Entrar'}</LoginText>
        </MakeAccount>
      )}
    </ContentField>
  );
};
