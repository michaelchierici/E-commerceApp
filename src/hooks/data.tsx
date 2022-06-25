import React, {useEffect, useState, useCallback} from 'react';

import {useDispatch} from 'react-redux';

import {setItemsLists} from '../store/actions';

export const dataContext = React.createContext({});

const Data: any = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([{}]);
  const [isLoading, setIsloading] = useState(true);

  const fetchData = useCallback(() => {
    if ({data: {}}) {
      setData([
        {id: 1, name: 'alexa', price: 20, ammount: 1},
        {id: 2, name: 'google', price: 20, ammount: 1},
        {id: 3, name: 'pod', price: 20, ammount: 1},
        {id: 4, name: 'home', price: 20, ammount: 1},
        {id: 5, name: 'home', price: 20, ammount: 1},
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

export default Data;
