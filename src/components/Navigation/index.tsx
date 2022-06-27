import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BottomButtons, CardButtons, Section} from './style';
import {IconButton} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

const NavigationBar = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#D5EAF5', '#F5DDDA']}>
      <Section>
        <CardButtons>
          <BottomButtons>
            <IconButton
              icon={'home-outline'}
              size={35}
              onPress={() => navigation.navigate('Home' as any)}
            />
          </BottomButtons>
          <BottomButtons>
            <IconButton
              icon={'cart-outline'}
              size={35}
              onPress={() => navigation.navigate('Cart' as any)}
            />
          </BottomButtons>
          <BottomButtons>
            <IconButton
              icon="cards-heart-outline"
              size={35}
              onPress={() => navigation.navigate('Fav' as any)}
            />
          </BottomButtons>
        </CardButtons>
      </Section>
    </LinearGradient>
  );
};
export default NavigationBar;
