import React, { useState } from "react";
import "../sort/SortOptions.scss";

const SortOptions = ({ sortOption, onSortChange }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleOptionClick = (option) => {
    onSortChange(option);
    setIsOptionsVisible(false); // Closes options after selecting
  };

  return (
    <div className="sort-options">
      <div className="filter-icon" onClick={toggleOptions}>
        <img src={"/images/filter.png"} alt="Filter" />
        {isOptionsVisible && (
          <div className="options-container">
            <div className="option" onClick={() => handleOptionClick("width")}>
              Width
            </div>
            <div className="option" onClick={() => handleOptionClick("height")}>
              Height
            </div>
            <div className="option" onClick={() => handleOptionClick("date")}>
              Date
            </div>
            <div className="option" onClick={() => handleOptionClick("likes")}>
              Likes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortOptions;
