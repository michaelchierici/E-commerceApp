import React from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';
import {removeFromFav} from '../../store/actions';

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
              <ButtonHeart>
                <IconButton
                  icon={'cards-heart'}
                  size={30}
                  color={'#2fe648'}
                  onPress={() =>
                    dispatch(
                      removeFromFav(
                        favItem.filter(
                          (delItem: any) => item.id !== delItem.id,
                        ),
                      ),
                    )
                  }
                />
              </ButtonHeart>
            </ControlButtons>
          </Cards>
        )}
      />
    </CardList>
  );
};
