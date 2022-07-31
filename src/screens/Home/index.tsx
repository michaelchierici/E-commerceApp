/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {Products} from '../../components/Products';
import {StoreType} from '../../store';
import {setLoading} from '../../store/actions';
import {Container} from '../../style/base';

const Home = () => {
  const dispatch = useDispatch();

  const {isLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );
  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 3000);
  }, [isLoading]);
  return (
    <Container>
      <Products />
    </Container>
  );
};

export default Home;
