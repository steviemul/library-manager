import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import createStore from './store';
import api from './api';
import { Provider } from 'react-redux';
import { configureApi } from 'redux-rest-actions';

const store = createStore();

configureApi(store, api);

ReactDOM.render(
  <Provider store={store}>
    <Container />  
  </Provider>,
  document.getElementById('app')
);