import React from 'react';
import { DebounceInput } from 'react-debounce-input';

const Search = ({ onChange }) => {
  return(
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      type="text"
      onChange={onChange}
      className="form-search form-control" />
  );
}

export default Search;
