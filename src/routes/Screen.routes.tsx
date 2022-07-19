import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import {Login} from '../screens/Login';

const Stack = createStackNavigator();

export default function MainScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Fav" component={Favorite} />
    </Stack.Navigator>
  );
}
