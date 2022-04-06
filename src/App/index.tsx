import React from 'react';

import Router from './Router';
import Header from '../views/Header';
import Notification from '../views/Notification';
import GlobalStyles from '../styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Notification />
      <Router />
    </>
  );
};

export default App;
