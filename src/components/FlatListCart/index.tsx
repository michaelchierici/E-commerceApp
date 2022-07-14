import React, {useState} from 'react';
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
  CardPrice,
  TotalValue,
} from './style';

export const FlatListCarts = () => {
  const dispatch = useDispatch();

  const {newItem}: any = useSelector((state: StoreType) => state.cartReducer);

  const filteredCartItems: any = newItem.filter(
    (value: any, index: any, self: any) =>
      index === self.findIndex((isCheck: any) => isCheck.name === value.name),
  );

  const priceTocalculate =
    filteredCartItems.length > 0
      ? filteredCartItems
          .map((item: any) => item.price)
          .reduce((curr: any) => curr)
      : null;

  const totalItemsinCartValue = filteredCartItems.length * priceTocalculate;

  const [totalResult, setTotalResult] = useState<number>(totalItemsinCartValue);

  return (
    <>
      <TopSection>
        <Title>Checkout</Title>
        <IconButton icon={'cart'} color={'#2fe648'} size={35} />
      </TopSection>
      <CardList>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredCartItems}
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
                        ? dispatch(
                            delAmmount(item.ammount--),
                            setTotalResult(totalResult - item.price),
                          )
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
                    onPress={() =>
                      dispatch(
                        addAmmount(item.ammount++),
                        setTotalResult(totalResult + item.price),
                      )
                    }
                  />
                </ButtonAdd>
              </ControlButtons>
            </Cards>
          )}
        />
        <CardPrice>
          <TotalValue>
            Total: R$
            {!totalResult ? ' 0.00' : totalResult}
          </TotalValue>
        </CardPrice>
      </CardList>
    </>
  );
};
