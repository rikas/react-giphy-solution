import { DebounceInput } from 'react-debounce-input';

const Search = ({ onChange }) => {
  return (
    <DebounceInput
      minLength={2}
      debounceTimeout={300}
      type="text"
      onChange={(event) => onChange(event.target.value)}
      className="form-search form-control"
    />
  );
};

export default Search;
