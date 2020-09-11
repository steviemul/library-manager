/**
 * Main set of redux reducers for the state model used within this application
 */

import { createReducer } from '@reduxjs/toolkit';
import { start, status } from './helper';
import * as actions from '../actions';

// Default empty structure for a library object
const LIBRARY_STUCTURE = {
  name: '',
  downloadCount: 0,
  author: '',
  notes: '',
  url: '',
  repository: '',
  version: '' 
};

// Our initial empty state model.
const initialState = {
  items: [],
  currentLibrary: LIBRARY_STUCTURE,
  pending: false,
  status: {},
  query: ''
};

export default createReducer(initialState, {
  
  // typially called on successful call of a rest endpoint
  [actions.apiCallSuccess]: state => {
    state.pending = false;
  },

  // typically called on a failed call to a rest endpoint
  [actions.apiCallFailure]: (state, action) => {
    status(state, {
      type: 'error',
      source: 'http',
      status: action.payload.response.status,
      data: action.payload.response.data
    });
  },

  // called on an initial getLibraries action
  // start just resets the state to an initial format
  [actions.getLibraries]: state => {
    start (state);
  },

  // called on complete of the getLibrariesSuccess action
  // state model is updated with the list of libraries returned from the server
  [actions.getLibrariesSuccess]: (state, action) => {
    state.pending = false;
    state.items = action.payload;
  },

  [actions.addLibrary]: state => {
    start (state);
  },

  [actions.getLibrary]: state => {
    start (state);
  },
  [actions.getLibrarySuccess]: (state, action) => {
    state.pending = false;
    state.currentLibrary = action.payload;
  },

  [actions.updateLibrary]: state => {
    start (state);
  },

  [actions.deleteLibrary]: state => {
    start (state);
  },
  
  [actions.clearCurrentLibrary]: state => {
    state.currentLibrary = LIBRARY_STUCTURE;
  },

  [actions.updateQuery]: (state, action) => {
    state.query = action.payload;
  },

  [actions.clearStatus]: (state) => {
    state.status = {};
  }
});