import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import NavigationBar from '../components/BottomNavigationBar';
import {Loading} from '../components/AnimationLoading';
import TopBar from '../components/TopBar';
import DataProvider from '../hooks/useData';
import {Login} from '../screens/Login';
import MainScreens from './Screen.routes';

import {useSelector} from 'react-redux';
import {StoreType} from '../store';
import {Container} from '../style/base';

const Routes = () => {
  const {isLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );
  const {isAuthenticated}: any = useSelector(
    (state: StoreType) => state.authReducer,
  );
  return (
    <NavigationContainer>
      {isLoading && <Loading />}

      {isAuthenticated ? (
        <Container>
          <TopBar />
          <MainScreens />
          <DataProvider />
          <NavigationBar />
        </Container>
      ) : (
        <Container>
          <Login />
        </Container>
      )}
    </NavigationContainer>
  );
};

export default Routes;
