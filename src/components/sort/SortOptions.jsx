import { useState, useRef, useEffect } from "react";
import "../sort/SortOptions.scss";

const SortOptions = ({ sortOption, onSortChange }) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setIsOptionsVisible(false);
      }
    };

    //closes clicking outside of filter
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const handleOptionClick = (option) => {
    onSortChange(option);
    setIsOptionsVisible(false); // Closes options after selecting
  };

  return (
    <div className="sort">
      <div className="filter-icon" onClick={toggleOptions}>
        <img src={"/images/filter.png"} alt="Filter" />
        {isOptionsVisible && (
          <div className="option-main" ref={optionsRef}>
            <div className="options" onClick={() => handleOptionClick("width")}>
              Width
            </div>
            <div
              className="options"
              onClick={() => handleOptionClick("height")}
            >
              Height
            </div>
            <div className="options" onClick={() => handleOptionClick("date")}>
              Date
            </div>
            <div className="options" onClick={() => handleOptionClick("likes")}>
              Likes
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortOptions;
