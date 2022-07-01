import React from 'react';

import {FlatListCategories} from '../../components/FlatListCategories';
import {FlatListProducts} from '../../components/FlatListProducts';

import {Container} from './style';

const Home = () => {
  return (
    <Container>
      <FlatListCategories />
      <FlatListProducts />
    </Container>
  );
};

export default Home;
