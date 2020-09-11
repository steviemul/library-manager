import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { configureApiMiddleware } from 'redux-rest-actions';
import rootReducer from './reducers';

export default (state) => {

  const store = configureStore({
    reducer: rootReducer,
    middleware: [configureApiMiddleware(), ...getDefaultMiddleware()],
    state
  });

  return store;
};