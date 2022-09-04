import React from 'react';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Favorite from '../screens/Favorite';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import {useTheme} from 'styled-components/native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {StoreType} from '../store';

const {Navigator, Screen} = createBottomTabNavigator();

const AppRoutes = () => {
  const theme = useTheme();

  const {loading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.main,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: theme.colors.shape_dark,
          width: '100%',
          display: loading ? 'none' : 'flex',
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton icon="home" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton icon="cart" size={30} color={color} />
          ),
        }}
      />
      <Screen
        name="Fav"
        component={Favorite}
        options={{
          tabBarIcon: ({color}) => (
            <IconButton icon="heart" size={30} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
export default AppRoutes;