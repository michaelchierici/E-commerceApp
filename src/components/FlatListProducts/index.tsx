/* eslint-disable react-native/no-inline-styles */
import {Slider} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {FlatList, Image} from 'react-native';

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

  // 1º não pertmir inserir o mesmo item duas vezes no carrinho; OK!!!
  // 2º botão de finalização de compra com animação;
  // 2º criar tela de login com validação;
  // 3º Tag Card que contém item.name será uma image; OK!!
  // 5º icone e botão de adicionar favoritos ao abrir a imagem;
  // 6º usar async storage; ~~~~~~
  // 7º usar uma animação de loading;
  // 8º corrigir eslint e corrigir aviso; OK!!

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
                  <IconButton
                    icon="heart-outline"
                    size={40}
                    color={'#32E0C4'}
                    onPress={() => dispatch(addToFav(item))}
                  />
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
