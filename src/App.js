import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import GlobalStyle from './styles/global';
import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
