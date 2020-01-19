import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import history from './services/history';

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
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
