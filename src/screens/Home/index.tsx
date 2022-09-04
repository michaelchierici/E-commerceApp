/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {FlatList} from 'react-native';

import {useAuth} from '../../hooks/useAuth';
import {api} from '../../services/api';
import {addToFav, setItemsLists, setLoading} from '../../store/actions';
import {
  Button,
  Container,
  Content,
  Footer,
  Header,
  Photo,
  Title,
} from './style';
import {useSelector} from 'react-redux';
import {StoreType} from '../../store';
import Slider from '../../components/Slider';
import {RenderIcon} from '../../util/renderIcon';
import LogOff from '../../components/Logout';
import {Loading} from '../../components/Loading';

const Home = () => {
  const {setItemInProductsList}: any = useSelector(
    (state: StoreType) => state.productsReducer,
  );

  const {loading}: any = useSelector(
    (state: StoreType) => state.loadingReducer,
  );

  const dispatch = useDispatch();
  const {user} = useAuth();

  useEffect(() => {
    if (!user.id) {
      return;
    }
    dispatch(setLoading(true));
    async function fetchProducts() {
      try {
        const response = await api.get('/api/pokemons', {
          headers: {authorization: 'Bearer ' + user.token},
        });

        dispatch(setItemsLists(await response.data));
      } catch (error) {
        console.log(error);
      } finally {
        dispatch(setLoading(false));
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
                  <Photo
                    source={{
                      uri: item?.img,
                    }}
                    style={{width: 250, height: 250, borderRadius: 10}}
                  />
                </Header>
                <Footer>
                  <Title>{item?.name}</Title>
                  <Button onPress={() => dispatch(addToFav(item))}>
                    <RenderIcon type={item.type} />
                  </Button>
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
