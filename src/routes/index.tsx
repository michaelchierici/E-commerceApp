import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {useAuth} from '../hooks/useAuth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export function Routes() {
  const {user} = useAuth();

  return (
    <NavigationContainer>
      {user.token ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
