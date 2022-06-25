import React from 'react';
import {FlatList} from 'react-native';

import {useSelector} from 'react-redux';

import {StoreType} from '../../store';

import {SectionTop, Title} from './style';

export const FlatListCategories = () => {
  const {setItem}: any = useSelector((state: StoreType) => state.cartReducer);
  return (
    <SectionTop>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={setItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => <Title>{item.name}</Title>}
      />
    </SectionTop>
  );
};
