import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {StoreType} from '../../store';

import {addToCart} from '../../store/cart/action';
import {addToFav} from '../../store/favorite/action';
import {
  ProductName,
  ProductPrice,
  SectionDetail,
  ProductDetail,
  Card,
  SectionCards,
  SectionTop,
  Title,
  SectionOption,
  ActionButtons,
} from './style';

export const FlatListCategories = () => {
  return (
    <SectionTop>
      <FlatList
        showsHorizontalScrollIndicator={false}
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
  );
};

export const FlatListProducts = () => {
  const dispatch = useDispatch();

  const [favItem] = useState([{id: 0, isFavorite: false}]);

  const [image] = useState([
    {src: require('../../assets/alexa.jpg'), key: '1'},
  ]);

  const {newItem} = useSelector((state: StoreType) => state.cartReducer);

  return (
    <SectionCards>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={image}
        renderItem={({item, index}) => <Card source={item.src} key={index} />}
      />
      <SectionOption>
        <ActionButtons>
          <IconButton
            icon="cart-plus"
            size={25}
            onPress={() => dispatch(addToCart(Math.random(), 'alexa', 20, 1))}
          />
        </ActionButtons>
        <ActionButtons>
          <IconButton
            icon="heart-outline"
            size={25}
            onPress={() => dispatch(addToFav(favItem))}
          />
        </ActionButtons>
      </SectionOption>
      <SectionDetail>
        <ProductName>{newItem.name}</ProductName>
        <ProductDetail>
          <ProductPrice>$100,00</ProductPrice>
        </ProductDetail>
      </SectionDetail>
    </SectionCards>
  );
};
