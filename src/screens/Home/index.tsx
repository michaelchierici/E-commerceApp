/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {Products} from '../../components/Products';
import {useAuth} from '../../hooks/useAuth';
import {api} from '../../services/api';
import {setItemsLists} from '../../store/actions';

const Home = () => {
  const dispatch = useDispatch();
  const {user} = useAuth();

  useEffect(() => {
    if (!user.id) {
      return;
    }
    async function fetchProducts() {
      try {
        const response = await api.get('/api/pokemons', {
          headers: {authorization: 'Bearer ' + user.token},
        });

        dispatch(setItemsLists(await response.data));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, [user]);

  return <Products />;
};

export default Home;
