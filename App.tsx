import React from 'react';
import NavigationBar from './src/components/Navigation';
import TopBar from './src/components/TopBar';
import Routes from './src/routes/';

const App = () => {
  return (
    <>
      <TopBar />
      <Routes />
      <NavigationBar />
    </>
  );
};

export default App;
