/* eslint-disable react-native/no-inline-styles */
import {Slider} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import {FavoriteIcon} from '../FavoriteIcons';

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
  FavoriteButton,
} from './style';

export const FlatListProducts = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {setItemInProductsList}: any = useSelector(
    (state: StoreType) => state.productsReducer,
  );

  // 1º botão de finalização de compra com animação;
  // 2º criar tela de login com validação;
  // 3º usar async storage; ~~~~~~
  // 4º usar uma animação de loading; OK!! Cogitar em melhorar a animação!

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={setItemInProductsList}
        keyExtractor={(item, key) => `${item.id}${key}`}
        renderItem={({item}) => (
          <SectionCards>
            <Card>
              <Image
                source={{
                  uri: item.img,
                }}
                style={{width: 250, height: 250, borderRadius: 10}}
              />
              <SectionDetail>
                <FavoriteButton>
                  <ProductName>{item.name}</ProductName>
                  <TouchableOpacity onPress={() => dispatch(addToFav(item))}>
                    <FavoriteIcon type={item.type} />
                  </TouchableOpacity>
                </FavoriteButton>
              </SectionDetail>
            </Card>
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
                  );

                  navigation.navigate('Cart' as any);
                }}
                trackStyle={{backgroundColor: '#393e46'}}
                renderThumbComponent={() => (
                  <ActionButtons>
                    <IconButton
                      onPress={() => {
                        dispatch(
                          addToCart(
                            (item.id = Math.random()),
                            item.name,
                            item.price,
                            item.ammount,
                          ),
                        );
                      }}
                      icon="cart-plus"
                      size={40}
                    />
                  </ActionButtons>
                )}
              />
              <ProductDetail
                pagingEnabled
                contentContainerStyle={{
                  flexGrow: 1,
                  paddingBottom: 300,
                }}
              />
              <SectionPrice>
                <ProductPrice>R$ {item.price}</ProductPrice>
                <IconButton icon="arrow-right" size={35} color="#2fe648" />
              </SectionPrice>
            </SectionOption>
          </SectionCards>
        )}
      />
    </>
  );
};
