/**
 * Set of selectors to tranform state to props as used 
 * by the main container component to pass stateful props down to child components
 */

export const selectLibraries = state => state.libraries.items;
export const currentLibrary = state => state.libraries.currentLibrary;
export const selectPending = state => state.libraries.pending;
export const selectStatus = state => state.libraries.status;
export const selectQuery = state => state.libraries.query;
