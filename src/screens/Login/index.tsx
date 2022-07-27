/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {Container} from '../../style/base';
import {
  ContentField,
  LoginButton,
  LoginText,
  PasswordInput,
  UserNameInput,
} from './style';
import Logo from '../../assets/pokeballLogin.svg';
import {loginSchema} from '../../util/loginSchema';
import {useFormik} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {api} from '../../services/api';
import {isLoading, setItemsLists} from '../../store/actions';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const createAccount = async (credencials: any) => {
    try {
      const response = await api.post('/api/trainer', credencials, {});

      return response;
    } catch (error: any) {
      console.log(error, 'usuário não cadastrado ou senha inválida');
    }
  };

  const login = useCallback(async (credencials: any) => {
    try {
      const {data}: any = await api.post('/api/login', credencials, {});

      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      console.log(error, 'usuário não cadastrado ou senha inválida');
    }
  }, []);

  const handleValidAccount = async (values: any) => {
    await createAccount(values);

    setIsAuthenticated(true);
  };

  const handleValidSubmit = async (values: any) => {
    await login(values);
    dispatch(isLoading(true));

    try {
      const token: any = await AsyncStorage.getItem('token');
      const response: any = await api.get('/api/pokemons', {
        headers: {authorization: 'Bearer ' + token},
      });

      dispatch(setItemsLists(await response.data));
    } catch (error: any) {
      console.log(error);
    }
    navigation.navigate('Home' as any);
  };

  const {values, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      user: '',
      password: '',
    },
    onSubmit: !isAuthenticated ? handleValidAccount : handleValidSubmit,
    validationSchema: loginSchema,
  });

  return (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <ContentField>
        <Logo width={100} height={100} />
        <UserNameInput
          placeholder="Username"
          value={values?.user}
          onChangeText={handleChange('user')}
          onBlur={handleBlur('user')}
        />
        <PasswordInput
          placeholder="Senha"
          value={values?.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          onSubmitEditing={handleSubmit}
        />
        <LoginButton>
          <LoginText onPress={handleSubmit}>
            {isAuthenticated ? 'Entrar' : 'Crie sua Conta'}
          </LoginText>
        </LoginButton>
      </ContentField>
    </Container>
  );
};
