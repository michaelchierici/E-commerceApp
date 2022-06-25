import React from 'react';
import {FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';

import {StoreType} from '../../store';

import {
  CardList,
  Cards,
  ControlButtons,
  ButtonRemove,
  ButtonAdd,
  ItemTitle,
} from './style';

export const FlatListCarts = () => {
  //const dispatch = useDispatch();

  const {newItem}: any = useSelector((state: StoreType) => state.cartReducer);

  return (
    <CardList>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={newItem}
        keyExtractor={(item, index) => `${item.id}${index}`}
        renderItem={({item}) => (
          <Cards>
            <ItemTitle>{item.name}</ItemTitle>
            <ControlButtons>
              <ButtonRemove>
                <IconButton icon={'minus-circle-outline'} size={28} />
              </ButtonRemove>
              <ButtonAdd>
                <IconButton icon={'plus-circle-outline'} size={28} />
              </ButtonAdd>
            </ControlButtons>
          </Cards>
        )}
      />
    </CardList>
  );
};
