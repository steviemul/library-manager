/**
 * Main set of actions used by this application
 */

import {createAction} from '@reduxjs/toolkit';

// Generic success and failure handling actions
export const apiCallSuccess = createAction('API_CALL_SUCCESS');
export const apiCallFailure = createAction('API_CALL_FAILURE');

// Actions for retrieving list of libraries
export const getLibraries = createAction('GET_LIBRARIES', options => 
  options ? {payload: {params: {...options}}} : {}
);

export const getLibrariesSuccess = createAction('GET_LIBRARIES_SUCCESS');

// Actions for retrieving a single library
export const getLibrary = createAction('GET_LIBRARY', id => ({payload: {id}}));

export const getLibrarySuccess = createAction('GET_LIBRARY_SUCCESS');

// Actions for adding a new library
export const addLibrary = createAction('ADD_LIBRARY', library => ({
  payload: {data: {...library, completed: false}}
}))

// Actions for updating an existing library
export const updateLibrary = createAction('UPDATE_LIBRARY', (id, library) => ({
  payload: {id, data: library}
}));

export const saveSuccess = createAction('SAVE_LIBRARY_SUCCESS');

// Actions for deleting a specified library
export const deleteLibrary = createAction('DELETE_LIBRARY', id => ({payload: {id}}));

// Additional, non rest request actions
export const clearCurrentLibrary = createAction('CLEAR_CURRENT_LIBRARY');

export const updateQuery = createAction('UPDATE_QUERY_STRING');

export const clearStatus = createAction('CLEAR_STATUS');