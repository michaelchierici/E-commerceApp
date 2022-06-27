import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {FlatListCategories} from '../../components/FlatListCategories';
import {FlatListProducts} from '../../components/FlatListProducts';

import {Container} from './style';

const Home = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#D5EAF5', '#F5DDDA']}>
      <Container>
        <FlatListCategories />
        <FlatListProducts />
      </Container>
    </LinearGradient>
  );
};

export default Home;
