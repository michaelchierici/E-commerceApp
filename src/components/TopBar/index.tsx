/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {IconButton} from 'react-native-paper';

import {Container} from './style';

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <IconButton
        icon="pokeball"
        size={70}
        color={'#32E0C4'}
        style={{margin: -10}}
        onPress={() => navigation.navigate('Home' as any)}
      />
    </Container>
  );
};

export default TopBar;
