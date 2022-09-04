/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Slider as ComponentSlide} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';

import {addToCart} from '../../store/actions';
import {useDispatch} from 'react-redux';

import {IconButton} from 'react-native-paper';
import {ButtonContent, ButtonTrackScroll, Slide} from './styles';

interface Item {
  item?: any;
}

const Slider = ({item}: Item) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Slide>
      <ComponentSlide
        containerStyle={{
          flexGrow: 1,
          backgroundColor: '#393e46',
          width: '100%',
        }}
        minimumValue={0.8}
        maximumValue={10}
        trackClickable={false}
        onSlidingComplete={() => {
          dispatch(addToCart(item));
          navigation.navigate('Cart' as any);
        }}
        trackStyle={{
          height: 70,
        }}
        maximumTrackTintColor="#000"
        minimumTrackTintColor="#000"
        animateTransitions
        renderThumbComponent={() => (
          <ButtonContent>
            <IconButton
              onPress={() => {
                dispatch(addToCart(item));
              }}
              icon="cart-plus"
              size={40}
            />
          </ButtonContent>
        )}
      />
      <ButtonTrackScroll />
    </Slide>
  );
};

export default Slider;
