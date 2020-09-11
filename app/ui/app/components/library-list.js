import React, {useEffect} from 'react';
import LibraryActions from './library-actions';
import LibraryFilter from './library-filter';
import { useStore } from 'react-redux';
import { NavLink } from 'react-router-dom'

const LibraryList = props => {
  const {getLibraries, libraries, query} = props;

  const store = useStore();

  const clearCurrentLibrary = () => {
    store.dispatch({
      type: 'CLEAR_CURRENT_LIBRARY'
    });
  };
  
  // call getLibraries when the query string gets updated
  useEffect(() => {
    getLibraries(query ? {n:query} : null);
  }, [query]);

  return (
    <div>
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="col s12 m6"><LibraryFilter {...props} /></div>
            <div className="col s12 m6">
              <h5 className="right-align">{`Showing ${libraries.length} items`}</h5>
            </div>
          </div>
          
          <div className='table-wrapper'>
            
          </div>
          <table className="striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Repository Type</th>
                <th>Download Count</th>
                <th>Author</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {libraries.map((library) => (
              <tr key={library.libId}>
                <td><NavLink title="Click for more info" to={`/detail/${library.libId}`}>{library.name}</NavLink></td>
                <td>{library.repository}</td>
                <td>{library.downloadCount}</td>
                <td>{library.author}</td>
                <td>
                  <LibraryActions 
                    {...props}
                    libraryId={library.libId}
                  />
                </td>
              </tr>
            ))}  
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="row">
        <div className="col s12">
          <NavLink 
            className="waves-effect waves-light btn"
            exact
            to='/add'
            onClick={clearCurrentLibrary}
          ><i className="material-icons left">add</i>Add New Library</NavLink>
        </div>
      </div>
    </div>
    
  );
};

export default LibraryList;