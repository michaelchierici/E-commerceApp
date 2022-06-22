import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Checkout from '../screens/Checkout';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function MainScreens() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}
