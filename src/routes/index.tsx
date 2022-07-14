import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigationBar from '../components/BottomNavigationBar';

import MainScreens from './Screen.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <MainScreens />
      <NavigationBar />
    </NavigationContainer>
  );
};

export default Routes;
