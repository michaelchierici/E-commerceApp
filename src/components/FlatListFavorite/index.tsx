import React from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';

import {CardList, Cards, ControlButtons, ItemTitle, ButtonHeart} from './style';

export const FlatListFavorites = () => {
  //const dispatch = useDispatch();

  const {favItem}: any = useSelector(
    (state: StoreType) => state.favoriteReducer,
  );

  return (
    <CardList>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <Cards>
            <ItemTitle>{item.name}</ItemTitle>
            <ControlButtons>
              <ButtonHeart>
                <IconButton icon={'cards-heart'} size={28} />
              </ButtonHeart>
            </ControlButtons>
          </Cards>
        )}
      />
    </CardList>
  );
};
