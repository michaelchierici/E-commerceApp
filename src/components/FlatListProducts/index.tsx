/* eslint-disable react-native/no-inline-styles */
import {Slider} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
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
  SectionCards,
  Card,
  SectionOption,
  ActionButtons,
  ProductDetail,
  SectionPrice,
} from './style';

export const FlatListProducts = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {setItem}: any = useSelector((state: StoreType) => state.cartReducer);

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={setItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <SectionCards>
            <Card>{item.name}</Card>
            <SectionOption>
              <Slider
                containerStyle={{
                  flexGrow: 1,
                  width: '95%',
                  backgroundColor: '#393e46',
                }}
                minimumValue={1}
                maximumValue={10}
                trackClickable={false}
                onSlidingComplete={() => {
                  dispatch(
                    addToCart(
                      (item.id = Math.random()),
                      item.name,
                      item.price,
                      item.ammount,
                    ),
                    navigation.navigate('Cart'),
                  );
                }}
                trackStyle={{backgroundColor: '#393e46'}}
                renderThumbComponent={() => (
                  <ActionButtons>
                    <IconButton
                      onPress={() =>
                        dispatch(
                          addToCart(
                            (item.id = Math.random()),
                            item.name,
                            item.price,
                            item.ammount,
                          ),
                        )
                      }
                      icon="cart-plus"
                      size={40}
                    />
                  </ActionButtons>
                )}
              />
              <ProductDetail
                pagingEnabled
                contentContainerStyle={{flexGrow: 1, paddingBottom: 300}}>
                <ActionButtons>
                  <IconButton
                    icon="heart-outline"
                    size={40}
                    onPress={() => dispatch(addToFav(item))}
                  />
                </ActionButtons>
              </ProductDetail>
              <SectionPrice>
                <ProductPrice>R$ {item.price}</ProductPrice>
                <IconButton icon="arrow-right" size={35} color="#2fe648" />
              </SectionPrice>
            </SectionOption>
            <SectionDetail>
              <ProductName>{item.name}</ProductName>
            </SectionDetail>
          </SectionCards>
        )}
      />
    </>
  );
};
