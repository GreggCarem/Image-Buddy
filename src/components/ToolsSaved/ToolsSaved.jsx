import SearchDescriptions from "../SearchDescriptions/SearchDescriptions.jsx";
import SortOptions from "../sort/SortOptions.jsx";
import HomePageBtn from "../HomePageBtn/HomePageBtn.jsx";
import "./ToolsSaved.scss";

const ToolsSaved = ({ onSearchChange, sortOption, onSortChange }) => {
  return (
    <div className="tools">
      <div className="green__box">
        <HomePageBtn />
        <SearchDescriptions onSearch={onSearchChange} />
        <SortOptions sortOption={sortOption} onSortChange={onSortChange} />
      </div>
    </div>
  );
};

export default ToolsSaved;
