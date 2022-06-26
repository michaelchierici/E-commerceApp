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
  ProductDetail,
  SectionCards,
  Card,
  SectionOption,
  ActionButtons,
} from './style';

export const FlatListProducts = () => {
  const dispatch = useDispatch();

  const {setItem}: any = useSelector((state: StoreType) => state.cartReducer);

  return (
    <>
      <FlatList
        horizontal
        showsVerticalScrollIndicator={false}
        data={setItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <SectionCards>
            <Card>{item.name}</Card>
            <SectionOption>
              <ActionButtons>
                <IconButton
                  icon="cart-plus"
                  size={40}
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
                />
              </ActionButtons>
              <ActionButtons>
                <IconButton
                  icon="heart-outline"
                  size={40}
                  onPress={() => dispatch(addToFav(item))}
                />
              </ActionButtons>
            </SectionOption>
            <SectionDetail>
              <ProductName>{item.name}</ProductName>
              <ProductDetail>
                <ProductPrice>{item.price}</ProductPrice>
              </ProductDetail>
            </SectionDetail>
          </SectionCards>
        )}
      />
    </>
  );
};
