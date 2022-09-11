/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, StatusBar} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';
import {addAmmount, delAmmount, removeFromCart} from '../../store/actions';
import {formatMoney} from '../../util/formatMoney';

import {
  Cards,
  Container,
  Title,
  Content,
  Footer,
  Button,
  ContentButtons,
  Header,
  Photo,
  Summary,
  Value,
  SubTitle,
  ButtonCheckout,
  Ammount,
  Top,
  CheckoutContent,
  Divisor,
} from './styles';

const Cart = () => {
  const dispatch = useDispatch();

  const {itemAddedInCart}: any = useSelector(
    (state: StoreType) => state.cartReducer,
  );

  const filteredCartItems: any = itemAddedInCart.filter(
    (value: any, index: any, self: any) =>
      index === self.findIndex((isCheck: any) => isCheck.name === value.name),
  );

  const accumulatedPricesToCalc =
    filteredCartItems.length > 0
      ? filteredCartItems
          .map((item: any) => item.price)
          .reduce((acc: any, curr: any) => acc + curr)
      : null;

  const [totalResult, setTotalResult] = useState<any>(0);
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Top>
        <Title>Shop</Title>
      </Top>
      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredCartItems}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={({item}) => (
            <Cards>
              <Photo
                source={{
                  uri: item?.img,
                }}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 10,
                }}
              />
              <Header>
                <SubTitle>{item.name}</SubTitle>
                <SubTitle>{formatMoney(item.price)}</SubTitle>
              </Header>
              <ContentButtons>
                <Button>
                  <IconButton
                    icon={
                      item.ammount <= 1 ? 'trash-can' : 'minus-circle-outline'
                    }
                    size={30}
                    onPress={() => {
                      item.ammount <= 1
                        ? dispatch(
                            removeFromCart(
                              itemAddedInCart.filter(
                                (delItem: any) => item.id !== delItem.id,
                              ),
                            ),
                          )
                        : (dispatch(delAmmount(item.ammount--)),
                          setTotalResult(totalResult - item.price));
                    }}
                  />
                </Button>
                <Ammount>{item.ammount}</Ammount>
                <Button>
                  <IconButton
                    icon={'plus-circle-outline'}
                    size={30}
                    onPress={() => {
                      setTotalResult(totalResult + item.price);
                      dispatch(addAmmount(item.ammount++));
                    }}
                  />
                </Button>
              </ContentButtons>
            </Cards>
          )}
        />
      </Content>
      <Footer>
        <Divisor />
        <Summary>
          <Title>Total</Title>
          <Value>{formatMoney(accumulatedPricesToCalc + totalResult)}</Value>
        </Summary>
        <CheckoutContent>
          <ButtonCheckout onPress={() => {}}>
            <Title>Checkout</Title>
          </ButtonCheckout>
        </CheckoutContent>
      </Footer>
    </Container>
  );
};

export default Cart;
