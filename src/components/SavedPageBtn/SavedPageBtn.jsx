import { Link } from "react-router-dom";
import "./SavedPageBtn.scss";

const SavedPageBtn = () => {
  return (
    <Link to="/saved" className="saved__button">
      <button>
        <img src="/images/Heart-page.png" alt="" />
      </button>
    </Link>
  );
};

export default SavedPageBtn;
