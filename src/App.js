import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import store from './store';

import GlobalStyle from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
