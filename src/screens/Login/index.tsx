/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {api} from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Container} from '../../style/base';
import {
  ArrowButton,
  ContentField,
  CredentialInput,
  LoginButton,
  LoginText,
  MakeAccount,
} from './style';

import {useNavigation} from '@react-navigation/native';

import Logo from '../../assets/pokeballLogin.svg';

import {loginSchema} from '../../util/loginSchema';
import {useFormik} from 'formik';

import {useDispatch, useSelector} from 'react-redux';

import {setLoading, setItemsLists} from '../../store/actions';
import {setAuth} from '../../store/auth/action';
import {StoreType} from '../../store';
import {IconButton} from 'react-native-paper';
import {showToast} from '../../util/toasts';

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );
  const [isAccountExist, setIsAccountExist] = useState(false);
  const [isNewAccount, setIsNewAccount] = useState(true);

  const createAccount = async (credentials: any) => {
    try {
      const response = await api.post('/api/trainer', credentials, {});
      showToast('Usuário cadastrado com sucesso!', 'success');
      return response;
    } catch (error: any) {
      const description = await error.code;

      if (description === 'ERR_BAD_REQUEST') {
        showToast('Nome de usuário já existe, faça login!', 'info');
      }
    }
  };

  const login = useCallback(async (credentials: any) => {
    try {
      const {data}: any = await api.post('/api/login', credentials, {});

      await AsyncStorage.setItem('token', data.token);

      dispatch(setAuth(true));
    } catch (error: any) {
      showToast('usuário não cadastrado ou senha inválida!', 'error');
      setIsAccountExist(false);
    }
  }, []);

  const handleValidSubmit = async (values: any) => {
    await login(values);
    dispatch(setLoading(true));

    try {
      const token: any = await AsyncStorage.getItem('token');
      const response: any = await api.get('/api/pokemons', {
        headers: {authorization: 'Bearer ' + token},
      });

      dispatch(setAuth(true));
      dispatch(setItemsLists(await response.data));
    } catch (error: any) {
      const description = error.code;

      if (description === 'ERR_BAD_REQUEST') {
        dispatch(setAuth(false));
        AsyncStorage.clear();
      }
    }
    navigation.navigate('Home' as any);
  };

  const handleValidAccount = async (values: any) => {
    await createAccount(values);
  };

  const singIn = () => {
    setIsAccountExist(true);
  };

  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    onSubmit: !isAccountExist ? handleValidAccount : handleValidSubmit,
    validationSchema: loginSchema,
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [isLoading]);

  return (
    <Container
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#393e46',
      }}>
      <ContentField>
        <Logo width={100} height={100} />
        <CredentialInput
          placeholder="Username"
          value={values?.user}
          onChangeText={handleChange('user')}
          onBlur={handleBlur('user')}
          placeholderTextColor="#ddd"
        />
        <CredentialInput
          placeholder="Senha"
          value={values?.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          onSubmitEditing={handleSubmit}
          secureTextEntry={true}
          placeholderTextColor="#ddd"
        />

        <LoginButton onPress={() => (isAccountExist ? handleSubmit : singIn())}>
          <LoginText>{isAccountExist ? 'Entrar' : 'Possui conta?'}</LoginText>
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
    </Container>
  );
};
