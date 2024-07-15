import { Link } from "react-router-dom";
import "./SavedPageBtn.scss";

const SavedPageBtn = () => {
  return (
    <Link to="/saved" className="saved__button">
      <button>
        <img src="/images/SavePage.png" alt="" />
      </button>
    </Link>
  );
};

export default SavedPageBtn;
