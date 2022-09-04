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
  ControlButtons,
  ButtonAdd,
  Header,
  Container,
  Title,
  Content,
  Footer,
  Button,
} from './styles';

interface ButtonsProps {
  type: 'minus' | 'delete' | 'add';
}

const Cart = ({type}: ButtonsProps) => {
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
          .reduce((curr: any) => curr)
      : null;

  let valueOfTotalItemsinCart =
    filteredCartItems.length * accumulatedPricesToCalc;

  const [totalResult, setTotalResult] = useState<any>(valueOfTotalItemsinCart);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredCartItems}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={({item}) => (
            <Cards>
              <Title>{item.name}</Title>
              <Title>{item.ammount}</Title>
              <ControlButtons>
                <Button type={item.ammount <= 0 ? 'minus' : 'delete'}>
                  <IconButton
                    icon={
                      item.ammount <= 0 ? 'minus-circle-outline' : 'trash-can'
                    }
                    size={30}
                    onPress={() => {
                      type !== 'delete'
                        ? (dispatch(delAmmount(item.ammount--)),
                          setTotalResult(totalResult - item.price))
                        : dispatch(
                            removeFromCart(
                              itemAddedInCart.filter(
                                (delItem: any) => item.id !== delItem.id,
                              ),
                            ),
                          );
                    }}
                  />
                </Button>
                <ButtonAdd>
                  <IconButton
                    icon={'plus-circle-outline'}
                    size={30}
                    onPress={() => {
                      setTotalResult(totalResult + item.price);
                      dispatch(addAmmount(item.ammount++));
                    }}
                  />
                </ButtonAdd>
              </ControlButtons>
            </Cards>
          )}
        />
      </Content>
      <Footer>
        <Title>{formatMoney(totalResult)}</Title>
      </Footer>
    </Container>
  );
};

export default Cart;
