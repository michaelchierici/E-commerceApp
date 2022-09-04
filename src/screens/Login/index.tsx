import React, {useState} from 'react';
import {
  ArrowButton,
  Container,
  Content,
  Header,
  Button,
  Title,
  Footer,
  Input,
  SubTitle,
} from './styles';

import Logo from '../../assets/pokeballLogin.svg';

import {loginSchema} from '../../util/loginSchema';
import {useFormik} from 'formik';

import {IconButton} from 'react-native-paper';
import {useAuth} from '../../hooks/useAuth';
import {StatusBar} from 'react-native';

export const SignIn = () => {
  const [isNewAccount, setIsNewAccount] = useState(true);

  const {login} = useAuth();

  const handleValidSubmit = async (user: any, password: any) => {
    if (!user && !password) {
      return;
    }
    await login(user, password);
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
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Content>
        <Header>
          <Logo width={100} height={100} />
        </Header>
        <Input
          placeholder="Username"
          value={values?.user}
          onChangeText={handleChange('user')}
          onBlur={handleBlur('user')}
        />
        <Input
          placeholder="Senha"
          value={values?.password}
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          onSubmitEditing={handleSubmit}
          secureTextEntry={true}
        />
        <Footer>
          <Button onPress={() => handleSubmit()}>
            <Title type="oldUser">Entrar</Title>
          </Button>

          {!isNewAccount && (
            <ArrowButton onPress={() => setIsNewAccount(true)}>
              <IconButton icon="arrow-left-thin" color="#fff" />
            </ArrowButton>
          )}
          {isNewAccount && (
            <SubTitle
              type="newUser"
              onPress={async () => {
                handleSubmit();
                setIsNewAccount(false);
              }}>
              <Title type="newUser">Crie sua Conta</Title>
            </SubTitle>
          )}
        </Footer>
      </Content>
    </Container>
  );
};
