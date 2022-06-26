import React from 'react';
import {Provider} from 'react-redux';

import TopBar from './src/components/TopBar';
import Routes from './src/routes/';
import DataProvider from './src/hooks/useData';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <TopBar />
      <Routes />
      <DataProvider />
    </Provider>
  );
};

export default App;
