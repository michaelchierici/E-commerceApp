import React from 'react';
import {FlatList} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {Container, Card, SectionCards, SectionTop, Title} from './style';
// #D5EAF5 , #F5DDDA Gradient
const Home = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 0, y: 0}}
      colors={['#D5EAF5', '#F5DDDA']}>
      <Container>
        <SectionTop>
          <FlatList
            horizontal
            data={[
              {key: 'All'},
              {key: 'Xbox'},
              {key: 'Switch'},
              {key: 'Playstation'},
              {key: '360'},
              {key: 'Playstation5'},
              {key: 'Playstation4'},
              {key: 'Playstation3'},
            ]}
            renderItem={({item}) => <Title>{item.key}</Title>}
          />
        </SectionTop>
        <SectionCards>
          <FlatList
            data={[{key: 'All'}, {key: 'Xbox'}, {key: 'Switch'}]}
            renderItem={({item}) => <Card>{item.key}</Card>}
          />
        </SectionCards>
      </Container>
    </LinearGradient>
  );
};

export default Home;
