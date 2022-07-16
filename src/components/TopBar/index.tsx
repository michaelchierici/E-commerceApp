/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Container, Logo} from './style';

const TopBar = () => {
  return (
    <Container>
      <Logo
        source={require('../../assets/pokeball.png')}
        style={{
          width: 60,
          height: 60,
        }}
      />
    </Container>
  );
};

export default TopBar;
