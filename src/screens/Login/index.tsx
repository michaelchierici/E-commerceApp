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
import {setLoading, setItemsLists} from '../../store/actions';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isAccountExist, setIsAccountExist] = useState(false);

  const createAccount = async (credentials: any) => {
    try {
      const response = await api.post('/api/trainer', credentials, {});

      return response;
    } catch (error: any) {
      console.log(error, 'usuário não cadastrado ou senha inválida');
    }
  };

  const login = useCallback(async (credentials: any) => {
    try {
      const {data}: any = await api.post('/api/login', credentials, {});

      await AsyncStorage.setItem('token', data.token);
    } catch (error: any) {
      console.log(error, 'usuário não cadastrado ou senha inválida');
      const statusCode = error.data?.status;

      if (statusCode === 401) {
        navigation.navigate('Login' as any);
      }
    }
  }, []);

  const handleValidAccount = async (values: any) => {
    await createAccount(values);
    setIsAccountExist(true);
  };

  const handleValidSubmit = async (values: any) => {
    await login(values);
    dispatch(setLoading(true));

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
        {!isAccountExist && (
          <LoginButton>
            <LoginText onPress={handleSubmit}>Crie uma conta</LoginText>
          </LoginButton>
        )}
        <LoginButton>
          <LoginText onPress={() => (isAccountExist ? handleSubmit : singIn())}>
            {isAccountExist ? 'Entrar' : 'Possui conta?'}
          </LoginText>
        </LoginButton>
      </ContentField>
    </Container>
  );
};
