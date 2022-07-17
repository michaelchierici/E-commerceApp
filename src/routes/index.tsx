import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import NavigationBar from '../components/BottomNavigationBar';
import {Loading} from '../components/Loading';
import TopBar from '../components/TopBar';
import DataProvider from '../hooks/useData';
import {StoreType} from '../store';
import {Container} from '../style/base';

import MainScreens from './Screen.routes';

const Routes = () => {
  const {setLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );
  return (
    <NavigationContainer>
      <DataProvider />
      {setLoading && <Loading />}
      <Container>
        <TopBar />
        <MainScreens />
        <NavigationBar />
      </Container>
    </NavigationContainer>
  );
};

export default Routes;
