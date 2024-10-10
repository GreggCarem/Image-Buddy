import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//  API Thunks
import {
  getImagesThunk,
  getSearchedImagesThunk,
  loadMoreImagesThunk,
} from "../../features/images/imageThunk.js";

//  API
import {
  imagesDataSelector,
  imagesStatusSelector,
  imagesErrorSelector,
} from "../../features/images/imageSlice.js";

// Components
import Tools from "../tools/Tools.jsx";
import LoadMoreButton from "../load/Load.jsx";
import InfoButton from "../information/information.jsx";
import DownloadButton from "../download/DownloadBtn.jsx";
import LikeButton from "../like/LikeBtn.jsx";

// Components to Display
const ImageGallery = () => {
  const dispatch = useDispatch();
  const images = useSelector(imagesDataSelector);
  const status = useSelector(imagesStatusSelector);
  const error = useSelector(imagesErrorSelector);
  const [query, setQuery] = useState("");
  const [sortOption, setSortOption] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc"); // Add sortOrder state
  const [likes, setLikes] = useState({});

  // Fetch images
  useEffect(() => {
    if (query === "") {
      dispatch(getImagesThunk());
    } else {
      dispatch(getSearchedImagesThunk(query));
    }
  }, [query, dispatch]);

  // Search
  const handleSearchChange = (searchQuery) => {
    setQuery(searchQuery);
  };

  // Sort options
  const handleSortChange = (option) => {
    if (option === sortOption) {
      // Toggle the sort order if the same option is clicked
      setSortOrder((prevOrder) => (prevOrder === "desc" ? "asc" : "desc"));
    } else {
      // Set new option and default to descending
      setSortOption(option);
      setSortOrder("desc");
    }
  };

  // Load More images
  const loadMoreImages = () => {
    dispatch(loadMoreImagesThunk());
  };

  // Like count
  useEffect(() => {
    const initialLikes = {};
    images.forEach((image) => {
      initialLikes[image.id] = image.likes;
    });
    setLikes(initialLikes);
  }, [images]);

  // Changes in Likes
  const handleLikeChange = (liked, imageId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [imageId]: liked ? prevLikes[imageId] + 1 : prevLikes[imageId] - 1,
    }));
  };

  // Sort images
  const sortedImages = [...images].sort((a, b) => {
    let comparison = 0;
    switch (sortOption) {
      case "width":
        comparison = b.width - a.width;
        break;
      case "height":
        comparison = b.height - a.height;
        break;
      case "date":
        comparison = new Date(b.created_at) - new Date(a.created_at);
        break;
      case "likes":
        comparison = b.likes - a.likes;
        break;
      default:
        break;
    }
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <>
      <Tools
        query={query}
        onSearchChange={handleSearchChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
      />

      {status === "pending" && <p>Loading...</p>}

      {status === "rejected" && <p>Error: {error.message}</p>}

      <div className="image__gallery">
        {sortedImages.map((image) => (
          <div key={image.id} className="image__container">
            <InfoButton image={image} />

            <img
              src={image.urls.small}
              alt={image.alt_description}
              className="gallery__image"
            />

            <LikeButton
              image={image}
              onLikeChange={(liked) => handleLikeChange(liked, image.id)}
            />

            <DownloadButton image={image} />
          </div>
        ))}
      </div>

      <LoadMoreButton onLoadMore={loadMoreImages} />
    </>
  );
};

export default ImageGallery;
