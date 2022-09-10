import React from 'react';
import {Button, Cards, Container, Content, Header, Title} from './styles';
import {FlatList, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {StoreType} from '../../store';
import {removeFromFav} from '../../store/actions';
import {useTheme} from 'styled-components';
import {RenderIcon} from '../../util/renderIcon';

const Favorite = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const {favItem}: any = useSelector(
    (state: StoreType) => state.favoriteReducer,
  );

  const filteredFavItem: any = favItem.filter(
    (value: any, index: any, self: any) =>
      index === self.findIndex((isCheck: any) => isCheck.name === value.name),
  );

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header />
      <Content>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredFavItem}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={({item}) => (
            <Cards>
              <Title>{item.name}</Title>
              <Button>
                <RenderIcon
                  type="heart-minus"
                  color={theme.colors.shape}
                  size={30}
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
              </Button>
            </Cards>
          )}
        />
      </Content>
    </Container>
  );
};

export default Favorite;
