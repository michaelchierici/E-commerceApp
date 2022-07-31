import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';

import Routes from './src/routes/';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Toast />
    </Provider>
  );
};

export default App;
