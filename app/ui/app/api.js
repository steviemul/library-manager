/**
 * Out set of REST apis to call.
 * 
 * This is used by the redux-rest-actions redux middleware to
 * execture upon when dispatching certain actions.
 */
import * as libraries from './actions';

export default {
  getLibraries: {
    url: '/libraries',
    actions: [libraries.getLibraries, libraries.getLibrariesSuccess, libraries.apiCallFailure]
  },
  getLibrary: {
    url: '/libraries/:id',
    actions: [libraries.getLibrary, libraries.getLibrarySuccess, libraries.apiCallFailure]
  },
  addLibrary: {
    url: '/libraries',
    actions: [libraries.addLibrary, libraries.apiCallSuccess, libraries.apiCallFailure]
  },
  updateLibrary: {
    url: '/libraries/:id',
    actions: [libraries.updateLibrary, libraries.apiCallSuccess, libraries.apiCallFailure]
  },
  deleteLibrary: {
    url: '/libraries/:id',
    actions: [libraries.deleteLibrary, libraries.apiCallSuccess, libraries.apiCallFailure]
  }
}