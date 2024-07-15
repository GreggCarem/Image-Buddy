import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getImagesThunk,
  getSearchedImagesThunk,
  loadMoreImagesThunk,
} from "../../features/images/imageThunk.js";
import ToolsSaved from "../ToolsSaved/ToolsSaved.jsx";
import LoadMoreButton from "../load/Load.jsx";
import InfoButton from "../information/information.jsx";
import DownloadButton from "../download/DownloadBtn.jsx";
import LikeButton from "../like/LikeBtn.jsx";
import "../displayed/ImageGallery.scss";

const SavedImages = () => {
  const dispatch = useDispatch();
  const [likedImages, setLikedImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");

  // Fetch liked images from localStorage on
  useEffect(() => {
    const images = JSON.parse(localStorage.getItem("likedImages")) || [];
    setLikedImages(images);
    setFilteredImages(images); // Filter Images
  }, []);

  useEffect(() => {
    if (query === "") {
      dispatch(getImagesThunk());
    } else {
      dispatch(getSearchedImagesThunk(query));
    }
  }, [query, dispatch]);

  const handleSearchChange = (searchQuery) => {
    setQuery(searchQuery);
    const filtered = likedImages.filter((image) =>
      image.alt_description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  // Sort option change
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Unlike image
  const handleUnlike = (id) => {
    // Remove from likedImages
    const updatedLikedImages = likedImages.filter((image) => image.id !== id);
    setLikedImages(updatedLikedImages);
    setFilteredImages(updatedLikedImages); // Update filteredImages after have been unliked
    localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
  };

  // Sort images based on selected option
  const sortedImages = [...filteredImages].sort((a, b) => {
    switch (sortOption) {
      case "width":
        return b.width - a.width;
      case "height":
        return b.height - a.height;
      case "date":
        return new Date(b.created_at) - new Date(a.created_at);
      case "likes":
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <>
      <ToolsSaved
        onSearchChange={handleSearchChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />
      <div className="image__gallery__saved">
        {sortedImages.map((image) => (
          <div key={image.id} className="image__container">
            <InfoButton
              key={`info_${image.id}`}
              image={image}
              onUnlike={handleUnlike}
            />
            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="gallery__image"
              key={`img_${image.id}`}
            />
            <LikeButton
              key={`like_${image.id}`}
              image={image}
              onLikeChange={(liked) => {
                if (!liked) handleUnlike(image.id);
              }}
            />
            <DownloadButton key={`download_${image.id}`} image={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedImages;
