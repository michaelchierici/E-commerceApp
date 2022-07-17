/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/logo.svg';
import {Container} from './style';
import {TouchableOpacity} from 'react-native';

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home' as any)}>
        <Logo width={80} height={80} style={{margin: -10}} />
      </TouchableOpacity>
    </Container>
  );
};

export default TopBar;
