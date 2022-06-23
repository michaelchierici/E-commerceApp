import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {} from '../../screens/Home/style';
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
  const [image] = useState([
    {src: require('../../assets/alexa.jpg'), key: '1'},
  ]);

  return (
    <SectionCards>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={image}
        renderItem={({item, index}) => <Card source={item.src} key={index} />}
      />
      <SectionOption>
        <ActionButtons>
          <IconButton icon="cart-plus" size={25} />
        </ActionButtons>
        <ActionButtons>
          <IconButton icon="heart-outline" size={25} />
        </ActionButtons>
      </SectionOption>
      <SectionDetail>
        <ProductName>Google Homme Pod</ProductName>
        <ProductDetail>
          <ProductPrice>$100,00</ProductPrice>
        </ProductDetail>
      </SectionDetail>
    </SectionCards>
  );
};
