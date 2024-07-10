// ImageGallery.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getImagesThunk,
  getSearchedImagesThunk,
} from "../../features/images/imageThunk.js";
import {
  imagesDataSelector,
  imagesStatusSelector,
  imagesErrorSelector,
} from "../../features/images/imageSlice.js";
import SearchBar from "../SearchBar/SearchBar.jsx";
import "./displayed.scss";

const ImageGallery = () => {
  const dispatch = useDispatch();
  const images = useSelector(imagesDataSelector);
  const status = useSelector(imagesStatusSelector);
  const error = useSelector(imagesErrorSelector);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "") {
      dispatch(getImagesThunk());
    } else {
      dispatch(getSearchedImagesThunk(query));
    }
  }, [query, dispatch]);

  const handleSearchChange = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div>
      <SearchBar query={query} onSearchChange={handleSearchChange} />
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
