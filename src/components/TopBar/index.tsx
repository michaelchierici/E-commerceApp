/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';

import {Container} from './style';
import Logo from '../../assets/logo.svg';

import {setAuth} from '../../store/actions';
import {useDispatch} from 'react-redux';

const TopBar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const logout = () => {
    AsyncStorage.clear();

    dispatch(setAuth(false));
  };

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Home' as any)}>
        <Logo width={80} height={80} style={{margin: -10}} />
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <IconButton icon="logout" color="#06d6a0" size={40} />
      </TouchableOpacity>
    </Container>
  );
};

export default TopBar;
