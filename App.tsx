import React from 'react';
import NavigationBar from './src/components/Navigation';
import TopBar from './src/components/TopBar';
import Routes from './src/routes/';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <>
      <PaperProvider>
        <TopBar />
        <Routes />
        <NavigationBar />
      </PaperProvider>
    </>
  );
};

export default App;
