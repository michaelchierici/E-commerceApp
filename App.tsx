import React from 'react';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {AuthProvider} from './src/hooks/useAuth';
import {Routes} from './src/routes';

import store from './src/store';
import theme from './src/style/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
          <Toast />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
