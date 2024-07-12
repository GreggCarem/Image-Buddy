import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SortOptions from "../sort/SortOptions.jsx";

import "./Tools.scss";

const Tools = ({ query, onSearchChange, sortOption, onSortChange }) => {
  return (
    <div className="tools">
      <div className="green__box">
        <SearchBar query={query} onSearchChange={onSearchChange} />
        <SortOptions sortOption={sortOption} onSortChange={onSortChange} />
      </div>
    </div>
  );
};

export default Tools;
