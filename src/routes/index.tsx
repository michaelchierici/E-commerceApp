import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import MainScreens from './Screen.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <MainScreens />
    </NavigationContainer>
  );
};

export default Routes;
