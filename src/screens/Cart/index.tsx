import React from 'react';

import {useSelector} from 'react-redux';
import {FlatListCarts} from '../../components/FlatListCart';
import {StoreType} from '../../store';

const Cart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {setItem}: any = useSelector((state: StoreType) => state.cartReducer);

  return <FlatListCarts />;
};

export default Cart;
