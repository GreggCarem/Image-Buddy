import React, { useState, useEffect } from "react";
import "./Information.scss";
import DownloadButton from "../download/DownloadBtn";
import LikeBtn from "../like/LikeBtn.jsx";
import CloseButton from "../close/CloseButton.jsx"; // Import the CloseButton component

const InfoButton = ({ image, setIsModalOpen, onUnlike }) => {
  const [showModal, setShowModal] = useState(false);
  const [editableDescription, setEditableDescription] = useState(
    image.alt_description
  );
  const [likes, setLikes] = useState(image.likes);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
    const isLiked = likedImages.some((img) => img.id === image.id);
    setLiked(isLiked);
  }, [image]);

  const saveDescription = () => {
    console.log("Description Updated");
    const updatedImage = { ...image, alt_description: editableDescription };
    const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
    const updatedLikedImages = likedImages.map((img) =>
      img.id === image.id ? updatedImage : img
    );
    localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
  };

  const handleLikeChange = (liked) => {
    setLiked(liked);
    setLikes((prevLikes) => (liked ? prevLikes + 1 : prevLikes - 1));
    if (liked) {
      const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
      likedImages.push(image);
      localStorage.setItem("likedImages", JSON.stringify(likedImages));
    } else {
      const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
      const updatedLikedImages = likedImages.filter(
        (img) => img.id !== image.id
      );
      localStorage.setItem("likedImages", JSON.stringify(updatedLikedImages));
      if (typeof onUnlike === "function") {
        onUnlike(image.id);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (typeof setIsModalOpen === "function") {
      setIsModalOpen(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
    if (typeof setIsModalOpen === "function") {
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <button className="info__button" onClick={openModal}>
        <img src="/images/information.png" alt="Information" />
      </button>

      {showModal && (
        <div className="image__modal" onClick={closeModal}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <CloseButton closeModal={closeModal} />{" "}
            {/* Add the CloseButton component */}
            <img src={image.urls.regular} alt={image.alt_description} />
            <div className="image__details">
              <div className="description__editor">
                <h1 className="description__editor__h1">Information</h1>
                <textarea
                  value={editableDescription}
                  onChange={(e) => setEditableDescription(e.target.value)}
                />
                <div className="like__button__modal">
                  <LikeBtn image={image} onLikeChange={handleLikeChange} />{" "}
                  <p className="Like__number">{likes}</p>
                </div>
                <div className="download__button__modal">
                  <DownloadButton image={image} />
                </div>
              </div>
              <p className="modal__dimensions">
                {image.width}x{image.height}
              </p>
              <button className="save__button" onClick={saveDescription}>
                <img
                  src="/images/Save.png"
                  alt="Saved Logo"
                  className="save__button__logo"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoButton;
