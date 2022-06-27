import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Container} from './style';
import {IconButton} from 'react-native-paper';

const TopBar = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['#D5EAF5', '#F5DDDA']}>
      <Container>
        <IconButton icon="menu" size={35} />
      </Container>
    </LinearGradient>
  );
};

export default TopBar;
