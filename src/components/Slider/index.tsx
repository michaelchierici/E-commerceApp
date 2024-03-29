/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Slider as ComponentSlide} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {addToCart} from '../../store/actions';
import {useDispatch} from 'react-redux';

import {ButtonContent, ButtonTrackScroll, Slide} from './styles';
import {RenderIcon} from '../../util/renderIcon';

interface Item {
  item?: any;
}

const Slider = ({item}: Item) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Slide>
      <ComponentSlide
        containerStyle={{
          flexGrow: 1,
          backgroundColor: 'transparent',
          width: '90%',
        }}
        minimumValue={1}
        maximumValue={10}
        trackClickable={false}
        onSlidingComplete={() => {
          dispatch(addToCart(item));
          navigation.navigate('Cart' as any);
        }}
        trackStyle={{
          height: '100%',
        }}
        maximumTrackTintColor="transparent"
        minimumTrackTintColor={theme.colors.background_secondary}
        animateTransitions
        renderThumbComponent={() => (
          <ButtonContent
            onPress={() => {
              dispatch(addToCart(item));
            }}>
            <RenderIcon type="cart-right" size={40} color="#000" />
          </ButtonContent>
        )}
      />

      <ButtonTrackScroll />
      <RenderIcon type="arrow" size={40} color="#1e1e" />
    </Slide>
  );
};

export default Slider;
