import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';
import NavigationBar from '../components/BottomNavigationBar';
import {Loading} from '../components/loading';
import TopBar from '../components/TopBar';
import DataProvider from '../hooks/useData';
import {StoreType} from '../store';

import MainScreens from './Screen.routes';

const Routes = () => {
  const {setLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );
  return (
    <NavigationContainer>
      <DataProvider />
      {setLoading ? (
        <Loading />
      ) : (
        <>
          <TopBar />
          <MainScreens />
          <NavigationBar />
        </>
      )}
    </NavigationContainer>
  );
};

export default Routes;
