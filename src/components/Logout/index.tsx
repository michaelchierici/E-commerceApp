import React from 'react';
import {StatusBar} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useAuth} from '../../hooks/useAuth';
import {useTheme} from 'styled-components';
import {Container, Header} from './style';

const LogOff = () => {
  const {signOut} = useAuth();
  const theme = useTheme();
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header onPress={() => signOut()}>
        <IconButton icon="logout" color={theme.colors.shape} size={40} />
      </Header>
    </Container>
  );
};

export default LogOff;
