import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getImagesThunk,
  getSearchedImagesThunk,
} from "../images/imageThunk.js";
import {
  imagesDataSelector,
  imagesStatusSelector,
  imagesErrorSelector,
} from "../images/imageSlice.js";
import SearchInput from "../SearchInput/SearchInput.jsx";
import "./displayed.scss";

const ImageGallery = () => {
  const dispatch = useDispatch();
  const images = useSelector(imagesDataSelector);
  const status = useSelector(imagesStatusSelector);
  const error = useSelector(imagesErrorSelector);
  const [query, setQuery] = React.useState("");

  useEffect(() => {
    if (query === "") {
      dispatch(getImagesThunk());
    } else {
      dispatch(getSearchedImagesThunk(query));
    }
  }, [query, dispatch]);

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <SearchInput query={query} handleSearchChange={handleSearchChange} />
      {status === "pending" && <p>Loading...</p>}
      {status === "rejected" && <p>Error: {error.message}</p>}
      <div className="image-gallery">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.urls.small}
            alt={image.alt_description}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
