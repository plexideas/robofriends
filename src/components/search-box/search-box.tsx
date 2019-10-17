import React from 'react';

import './search-box.scss';

type Props = {
  searchChange: (event:React.SyntheticEvent<HTMLInputElement>) => void
};

const SearchBox = (props: Props) => {
  return (
    <input 
      type="text" 
      className="search-box" 
      placeholder="Robot's name"
      onChange={props.searchChange}
    />
  );
};

export default SearchBox;
