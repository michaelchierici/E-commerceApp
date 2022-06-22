import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {BottomButtons, CardButtons, Section} from './style';
import {IconButton} from 'react-native-paper';

const NavigationBar = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#D5EAF5', '#F5DDDA']}>
      <Section>
        <CardButtons>
          <BottomButtons>
            <IconButton icon="account-outline" size={30} />
          </BottomButtons>
          <BottomButtons>
            <IconButton icon="cart-outline" size={30} />
          </BottomButtons>
          <BottomButtons>
            <IconButton icon="cards-heart-outline" size={30} />
          </BottomButtons>
        </CardButtons>
      </Section>
    </LinearGradient>
  );
};
export default NavigationBar;
