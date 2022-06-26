import React from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';
import {addAmmount, delAmmount, removeToCard} from '../../store/actions';

import {
  CardList,
  Cards,
  ControlButtons,
  ButtonRemove,
  ButtonAdd,
  ItemTitle,
} from './style';

export const FlatListCarts = () => {
  const dispatch = useDispatch();

  const {newItem}: any = useSelector((state: StoreType) => state.cartReducer);

  console.log(newItem);

  return (
    <CardList>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <Cards>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemTitle>{item.ammount}</ItemTitle>
            <ControlButtons>
              <ButtonRemove>
                <IconButton
                  icon={
                    item.ammount <= 0 ? 'trash-can' : 'minus-circle-outline'
                  }
                  size={25}
                  onPress={() =>
                    item.ammount > 0
                      ? dispatch(delAmmount(item.ammount--))
                      : dispatch(removeToCard(item.id))
                  }
                />
              </ButtonRemove>
              <ButtonAdd>
                <IconButton
                  icon={'plus-circle-outline'}
                  size={28}
                  onPress={() => dispatch(addAmmount(item.ammount++))}
                />
              </ButtonAdd>
            </ControlButtons>
          </Cards>
        )}
      />
    </CardList>
  );
};
