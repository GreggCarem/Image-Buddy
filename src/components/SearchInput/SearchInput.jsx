import PropTypes from "prop-types"; //seaprate library to run the query and handle search

const SearchInput = ({ query, handleSearchChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={handleSearchChange}
      placeholder="Search images..."
    />
  );
};

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchInput;
