import React from 'react';
import {StatusBar} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useAuth} from '../../hooks/useAuth';

import {Container, Header} from './style';

const LogOff = () => {
  const {signOut} = useAuth();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header onPress={() => signOut()}>
        <IconButton icon="logout" color="#06d6a0" size={40} />
      </Header>
    </Container>
  );
};

export default LogOff;
