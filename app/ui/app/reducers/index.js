import { combineReducers } from 'redux';

import librariesReducer from './libraries';

const mainReducer = combineReducers({
  libraries: librariesReducer
});

export default mainReducer;