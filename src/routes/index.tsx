import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationBar from '../components/BottomNavigationBar';
import TopBar from '../components/TopBar';
import DataProvider from '../hooks/useData';

import MainScreens from './Screen.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <DataProvider />
      <TopBar />
      <MainScreens />
      <NavigationBar />
    </NavigationContainer>
  );
};

export default Routes;
