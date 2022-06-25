import React from 'react';
import {Provider} from 'react-redux';
import NavigationBar from './src/components/Navigation';
import TopBar from './src/components/TopBar';
import Routes from './src/routes/';
import Data from './src/hooks/data';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <TopBar />
      <Routes />
      <NavigationBar />
      <Data />
    </Provider>
  );
};

export default App;
