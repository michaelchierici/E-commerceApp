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
  Logo,
  Text,
} from './styles';

import {loginSchema} from '../../util/loginSchema';
import {useFormik} from 'formik';

import Icon from 'react-native-vector-icons/AntDesign';
import {useAuth} from '../../hooks/useAuth';
import {StatusBar} from 'react-native';

export const SignIn = () => {
  const [isNewAccount, setIsNewAccount] = useState(false);

  const {login} = useAuth();

  const handleValidSubmit = async (user: any, password: any) => {
    if (!user && !password) {
      return;
    }
    await login(user, password, isNewAccount ? 'trainer' : 'login');
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
          <Title>Login</Title>
          <Logo />
        </Header>
        <Input
          placeholder="Usuário"
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
            <Text type="oldUser">{!isNewAccount ? 'Entrar' : 'Confirmar'}</Text>
          </Button>

          {isNewAccount && (
            <ArrowButton onPress={() => setIsNewAccount(false)}>
              <Icon name="arrowleft" color="#fff" />
            </ArrowButton>
          )}
          {!isNewAccount && (
            <SubTitle
              type="newUser"
              onPress={async () => {
                handleSubmit();
                setIsNewAccount(true);
              }}>
              <SubTitle type="newUser">Crie sua Conta</SubTitle>
            </SubTitle>
          )}
        </Footer>
      </Content>
    </Container>
  );
};
