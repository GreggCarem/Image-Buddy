import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import SortOptions from "../sort/SortOptions.jsx";

import "./Tools.scss";
import SavedPageBtn from "../SavedPageBtn/SavedPageBtn.jsx";
import HomePageBtn from "../HomePageBtn/HomePageBtn.jsx";

const Tools = ({ query, onSearchChange, sortOption, onSortChange }) => {
  return (
    <div className="tools">
      <div className="green__box">
        <SavedPageBtn />
        <SearchBar query={query} onSearchChange={onSearchChange} />
        <SortOptions sortOption={sortOption} onSortChange={onSortChange} />
      </div>
    </div>
  );
};

export default Tools;
