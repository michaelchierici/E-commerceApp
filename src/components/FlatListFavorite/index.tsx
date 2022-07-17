import React from 'react';
import {FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';
import {removeFromFav} from '../../store/actions';
import {FavoriteIcon} from '../FavoriteIcons';

import {CardList, Cards, ControlButtons, ItemTitle, ButtonHeart} from './style';

export const FlatListFavorites = () => {
  const dispatch = useDispatch();

  const {favItem}: any = useSelector(
    (state: StoreType) => state.favoriteReducer,
  );

  const filteredFavItem: any = favItem.filter(
    (value: any, index: any, self: any) =>
      index === self.findIndex((isCheck: any) => isCheck.name === value.name),
  );

  return (
    <CardList>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredFavItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <Cards>
            <ItemTitle>{item.name}</ItemTitle>
            <ControlButtons>
              <ButtonHeart
                onPress={() =>
                  dispatch(
                    removeFromFav(
                      favItem.filter((delItem: any) => item.id !== delItem.id),
                    ),
                  )
                }>
                <FavoriteIcon type={item.type} />
              </ButtonHeart>
            </ControlButtons>
          </Cards>
        )}
      />
    </CardList>
  );
};
