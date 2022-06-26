import React, {useEffect, useState, useCallback} from 'react';

import {useDispatch} from 'react-redux';

import {setItemsLists} from '../store/actions';

export const dataContext = React.createContext({});

const DataProvider: any = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([{}]);
  const [isLoading, setIsloading] = useState(true);

  const fetchData = useCallback(() => {
    if ({data: {}}) {
      setData([
        {id: Math.random(), name: 'alexa', price: 20, ammount: 1},
        {id: Math.random(), name: 'google', price: 20, ammount: 1},
        {id: Math.random(), name: 'pod', price: 20, ammount: 1},
        {id: Math.random(), name: 'home', price: 20, ammount: 1},
        {id: Math.random(), name: 'home', price: 20, ammount: 1},
      ]);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  useEffect(() => {
    fetchData();
    dispatch(setItemsLists(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return <dataContext.Provider value={{data, setData}} />;
};

export default DataProvider;
