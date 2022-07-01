import React from 'react';
import {Container} from './style';
import {IconButton} from 'react-native-paper';

const TopBar = () => {
  return (
    <>
      <Container>
        <IconButton icon="menu" size={35} color={'#2fe648'} />
      </Container>
    </>
  );
};

export default TopBar;
