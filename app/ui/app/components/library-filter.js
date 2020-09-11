import React from 'react';
import {useStore} from 'react-redux';

const LibraryFilter = ({query}) => {

  const store = useStore();

  const handleChange = e => {
    store.dispatch({
      type: 'UPDATE_QUERY_STRING',
      payload: e.target.value
    })
  };

  return (
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
        <i class="material-icons prefix">search</i>
          <input placeholder="Filter" id="query" type="text" 
            autoComplete="off"
            className="validate" 
            value={query} 
            onChange={handleChange}></input>
        </div>
      </div>
    </form>
  )
};

export default LibraryFilter;