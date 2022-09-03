import React from 'react';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Fav" component={Favorite} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
