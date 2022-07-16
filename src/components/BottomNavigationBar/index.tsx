import React from 'react';
import {BottomButtons, CardButtons, Section} from './style';
import {IconButton} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <Section>
      <CardButtons>
        <BottomButtons>
          <IconButton
            icon="home"
            color={'#2fe648'}
            size={35}
            onPress={() => navigation.navigate('Home' as any)}
          />
        </BottomButtons>
        <BottomButtons>
          <IconButton
            icon="cart"
            color={'#2fe648'}
            size={35}
            onPress={() => navigation.navigate('Cart' as any)}
          />
        </BottomButtons>
        <BottomButtons>
          <IconButton
            icon="cards-heart"
            size={35}
            color={'#2fe648'}
            onPress={() => navigation.navigate('Fav' as any)}
          />
        </BottomButtons>
      </CardButtons>
    </Section>
  );
};
export default NavigationBar;
