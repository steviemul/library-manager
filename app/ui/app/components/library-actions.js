import React from 'react';

const LibraryActions = ({
  libraryId, 
  deleteLibrary, 
  getLibraries}) => {

  const onDelete = () => {    
    deleteLibrary(libraryId).then(() => {
      getLibraries();
    });
  };

  return (
    <div className="actions">
      <a onClick={onDelete.bind()} title="Delete"><i className="small material-icons text-black">clear</i></a>
    </div>
  );
};

export default LibraryActions;