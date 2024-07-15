import "../SearchDescriptions/SearchDescriptions.scss";
import React, { useState } from "react";

const SearchDescriptions = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(query);
    onSearch(query); // Trigger search immediately
  };

  return (
    <input
      className="search__descriptions"
      type="text"
      value={searchQuery}
      onChange={handleSearchChange}
      placeholder="Search description..."
    />
  );
};

export default SearchDescriptions;
