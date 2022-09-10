/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native';

import {useAuth} from '../../hooks/useAuth';
import {api} from '../../services/api';
import {addToCart, addToFav, setItemsLists} from '../../store/actions';
import {
  Button,
  Container,
  Content,
  Footer,
  Header,
  Photo,
  Title,
  Value,
} from './style';
import {useSelector} from 'react-redux';
import {StoreType} from '../../store';
import Slider from '../../components/Slider';
import {RenderIcon} from '../../util/renderIcon';
import LogOff from '../../components/Logout';
import {Loading} from '../../components/Loading';
import {useTheme} from 'styled-components';
import {formatMoney} from '../../util/formatMoney';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  const {setItemInProductsList}: any = useSelector(
    (state: StoreType) => state.productsReducer,
  );

  const dispatch = useDispatch();
  const {user} = useAuth();

  useEffect(() => {
    if (!user.id) {
      return;
    }
    setLoading(true);
    async function fetchProducts() {
      try {
        const response = await api.get('/api/pokemons', {
          headers: {authorization: 'Bearer ' + user.token},
        });

        dispatch(setItemsLists(await response.data));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [user]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <LogOff />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={setItemInProductsList}
            keyExtractor={(item, key) => `${item.id}${key}`}
            renderItem={({item}) => (
              <Content>
                <Header>
                  <Button>
                    <RenderIcon
                      type="heart"
                      size={30}
                      color={theme.colors.title}
                      onPress={() => {
                        dispatch(addToFav(item));
                      }}
                    />
                    <RenderIcon
                      type="cart"
                      size={30}
                      color={theme.colors.title}
                      onPress={() => {
                        dispatch(addToCart(item));
                      }}
                    />
                  </Button>
                  <Photo
                    source={{
                      uri: item?.img,
                    }}
                    style={{
                      width: '100%',
                      height: 250,
                      borderRadius: 10,
                    }}
                  />
                </Header>
                <Footer>
                  <Title>{item?.name}</Title>
                  <Value>{formatMoney(item?.price)}</Value>
                </Footer>
                <Slider item={item} />
              </Content>
            )}
          />
        </Container>
      )}
    </>
  );
};

export default Home;
