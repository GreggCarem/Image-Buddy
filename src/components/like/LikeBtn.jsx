import React, { useState, useEffect } from "react";
import "./LikeBtn.scss";

const LikeButton = ({ image, onLikeChange }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(image.likes); // Initialize likes state

  useEffect(() => {
    const likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
    const isLiked = likedImages.some((img) => img.id === image.id);
    setLiked(isLiked);
  }, [image.id]);

  const handleLikeToggle = () => {
    let likedImages = JSON.parse(localStorage.getItem("likedImages")) || [];
    if (liked) {
      likedImages = likedImages.filter((img) => img.id !== image.id);
      setLikes((prevLikes) => prevLikes - 1); // -- likes
    } else {
      likedImages = [...likedImages, image];
      setLikes((prevLikes) => prevLikes + 1); // ++ likes
    }
    localStorage.setItem("likedImages", JSON.stringify(likedImages));
    setLiked(!liked);
    if (typeof onLikeChange === "function") {
      onLikeChange(!liked); // Inform dad about like status change
    }
  };

  return (
    <button
      className={`like__button ${liked ? "liked" : ""}`}
      onClick={handleLikeToggle}
    >
      {liked ? (
        <img src="/images/Red--Liked.png" alt="Red__liked" />
      ) : (
        <img src="/images/Green--Liked.png" alt="Green__liked" />
      )}
    </button>
  );
};

export default LikeButton;
