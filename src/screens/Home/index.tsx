/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {FlatListProducts} from '../../components/FlatListProducts';
import {StoreType} from '../../store';
import {isLoading} from '../../store/actions';
import {Container} from '../../style/base';

const Home = () => {
  const dispatch = useDispatch();

  const {setLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );
  useEffect(() => {
    setTimeout(() => {
      dispatch(isLoading(false));
    }, 3000);
  }, [setLoading]);
  return (
    <Container>
      <FlatListProducts />
    </Container>
  );
};

export default Home;
