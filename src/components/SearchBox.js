import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
  return (
    <div className="pa2">
      <input 
        onChange={searchChange}
        className="pa3 ba b--green bg-light-blue"
        type="search" 
        placeholder="search robots" 
      />
    </div>
  );
};

export default SearchBox;