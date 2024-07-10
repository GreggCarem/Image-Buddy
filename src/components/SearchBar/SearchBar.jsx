import "../SearchBar/SearchBar.scss";

const SearchBar = ({ query, onSearchChange }) => {
  return (
    <input
      className="search"
      type="text"
      value={query}
      onChange={(event) => onSearchChange(event.target.value)}
      placeholder="Search images..."
    />
  );
};

export default SearchBar;
