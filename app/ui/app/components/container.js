/**
 * Main Container component for the application.
 * 
 * This manages connecting to the state model and 
 * passing down stateful props to child components.
 */

import React from 'react';
import LibraryList from './library-list';
import LibraryDetail from './library-detail';
import StatusPanel from './status-panel';
import { api } from 'redux-rest-actions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as selectors from '../selectors';

const Container = props => (
  <div className="container">
    <div className="row">
      <div className="col s12">
        <h1>Library Manager</h1>
      </div>
    </div>
    <StatusPanel {...props} />
    <Router>
      <Switch>
        <Route path="/detail/:id">
          <LibraryDetail
          {...props}
          addLibrary={api.addLibrary}
          updateLibrary={api.updateLibrary}
          getLibrary={api.getLibrary}
          />
        </Route>

        <Route path="/add">
          <LibraryDetail
          {...props}
          mode='ADD'
          addLibrary={api.addLibrary}
          updateLibrary={api.updateLibrary}
          />
        </Route>

        <Route path="/">
            <LibraryList
            {...props}
            getLibraries={api.getLibraries}
            getLibrary={api.getLibrary}
            addLibrary={api.addLibrary}
            updateLibrary={api.updateLibrary}
            deleteLibrary={api.deleteLibrary}
          />
        </Route>
      </Switch>
    </Router>
    
  </div>
);

const mapStateToProps = state => ({
  libraries: selectors.selectLibraries(state),
  currentLibrary: selectors.currentLibrary(state),
  pending: selectors.selectPending(state),
  status: selectors.selectStatus(state),
  query: selectors.selectQuery(state)
});

export default connect(mapStateToProps)(Container);