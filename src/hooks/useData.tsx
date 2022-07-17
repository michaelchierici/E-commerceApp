import React, {useEffect, useState, useCallback} from 'react';
import {useSelector} from 'react-redux';

import {useDispatch} from 'react-redux';
import {StoreType} from '../store';

import {setItemsLists} from '../store/actions';
import {isLoading} from '../store/actions';

export const dataContext = React.createContext({});

const DataProvider: any = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<any[]>([{}]);
  const {setLoading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );

  const fetchData = useCallback(() => {
    if ({data: {}}) {
      setData([
        {
          id: Math.random(),
          name: 'Jigglypuff',
          price: 20,
          ammount: 1,
          img: 'https://lh6.googleusercontent.com/q21h4_xaCDBFcbOPIz8kJ5lWPwmB9lWMm2tfY-WXJ-SPAnWziyBMpddSF-0ChQWURmze7cuvzhstA867_KrLHiooCAQtvjkp1BrBIvXndyfh4YwfbBnoCYsyMHZzRK_9GH6LhBMT',
        },
        {
          id: Math.random(),
          name: 'Pikachu',
          price: 20,
          ammount: 1,
          img: 'https://lh5.googleusercontent.com/-va3HseRCEQS-KH_GFzA4PBwrMMYS2Da8SY_7zffpp9HKDfD5oX0ip9u4TB6vHJtmjNXJSYyi0tLLl8BlFeLtSc79JT2uHHoK_brIcNXLnG1M7dvD4PxDzsWdBExXN-BSWeQxhhX',
        },
        {
          id: Math.random(),
          name: 'Squirtle',
          price: 20,
          ammount: 1,
          img: 'https://lh6.googleusercontent.com/LYkVVpYykwiqmMNwzvQPiogdlpCKUfqlEDZHb2qxcM46wJESWswHes2kjAaQmEZhHJzXtW0Ja3eb0tE-oSlgzmf3yTqiatlUy0ob1fjuTJxHdAMHJ737xPKXlIZhhf_4kNy60oTK',
        },
        {
          id: Math.random(),
          name: 'Mew',
          price: 20,
          ammount: 1,
          img: 'https://lh3.googleusercontent.com/FIU97Vx9Xk7pBZK_BaMdDRcnak7wRK91vexpZHsR02FPPmNab6c72wVXSFfzx3HHPUGJtszOz4-eoE1-irbhwhELHrACuTVCViqfPdTLSJGkV2k-wDugo4TpyeEkHfY1iVMq219g',
        },
        {
          id: Math.random(),
          name: 'Bulbasaur',
          price: 20,
          ammount: 1,
          img: 'https://lh6.googleusercontent.com/JLLAQ4oeJSpX1-OWQlZ6mCAH5MLcDl8MjrWRwGIsxFPBA70ADUFiBLLy3KOlD4ek8P4wF6usa8TBEttJdDPtRXr92rCagBarwdWLv4lGkkEiphPXHXBq4OydCmVpvMCREJ3otaI6',
        },
      ]);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(isLoading(false));
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchData();
    dispatch(setItemsLists(data as any));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setLoading]);

  return <dataContext.Provider value={{data, setData}} />;
};

export default DataProvider;
