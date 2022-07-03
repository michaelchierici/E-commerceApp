/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';
import {addAmmount, delAmmount, removeFromCart} from '../../store/actions';

import {
  CardList,
  Cards,
  ControlButtons,
  ButtonRemove,
  ButtonAdd,
  ItemTitle,
  Title,
  TopSection,
} from './style';

export const FlatListCarts = () => {
  const dispatch = useDispatch();

  const {newItem}: any = useSelector((state: StoreType) => state.cartReducer);

  const cloned: any = [...newItem];

  return (
    <>
      <TopSection>
        <Title>Checkout</Title>
        <IconButton icon={'cart'} color={'#2fe648'} size={35} />
      </TopSection>
      <CardList>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cloned}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={({item}) => (
            <Cards>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemTitle>{item.ammount}</ItemTitle>
              <ControlButtons>
                <ButtonRemove>
                  <IconButton
                    icon={
                      item.ammount <= 0 ? 'trash-can' : 'minus-circle-outline'
                    }
                    size={30}
                    onPress={() =>
                      item.ammount > 0
                        ? dispatch(delAmmount(item.ammount--))
                        : dispatch(
                            removeFromCart(
                              newItem.filter(
                                (delItem: any) => item.id !== delItem.id,
                              ),
                            ),
                          )
                    }
                  />
                </ButtonRemove>
                <ButtonAdd>
                  <IconButton
                    icon={'plus-circle-outline'}
                    size={30}
                    onPress={() => dispatch(addAmmount(item.ammount++))}
                  />
                </ButtonAdd>
              </ControlButtons>
            </Cards>
          )}
        />
      </CardList>
    </>
  );
};
