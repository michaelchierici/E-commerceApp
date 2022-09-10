/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {useTheme} from 'styled-components';
import {Container, Header, Title} from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const LogOff = () => {
  const {signOut, user} = useAuth();
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header onPress={() => signOut()}>
        <Title>
          Olá, {'\n'} {user.name}
        </Title>
        <Icon
          style={{position: 'absolute', right: '5%'}}
          name="logout"
          color={theme.colors.shape}
          size={30}
        />
      </Header>
    </Container>
  );
};

export default LogOff;
