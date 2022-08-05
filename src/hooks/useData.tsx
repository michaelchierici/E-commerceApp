/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

import {StoreType} from '../store';
import {setLoading} from '../store/actions';

export const dataContext = React.createContext({});

const DataProvider: any = () => {
  const dispatch = useDispatch();

  const [catchData, setData] = useState<any[]>([{}]);

  const {isLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 2000);
  }, [isLoading]);

  return <dataContext.Provider value={{catchData, setData}} />;
};

export default DataProvider;
