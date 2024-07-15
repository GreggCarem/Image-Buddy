import { Link } from "react-router-dom";
import "./HomePageBtn.scss";

const HomePageBtn = () => {
  return (
    <Link to="/" className="home__button">
      <button>
        {" "}
        <img src="/images/Home.png" alt="Home" />
      </button>
    </Link>
  );
};

export default HomePageBtn;
