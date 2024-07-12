import React, { useState } from "react";
import "./Information.scss";
import DownloadButton from "../download/DownloadBtn";

const InfoButton = ({ image }) => {
  // States
  const [showImage, setShowImage] = useState(false);
  const [editableDescription, setEditableDescription] = useState(
    image.alt_description
  );

  // Show modal
  const showImageDetails = () => {
    setShowImage(true);
  };

  // Close Modal
  const closeImage = () => {
    setShowImage(false);
  };

  // Chnage Description
  const handleDescriptionChange = (e) => {
    setEditableDescription(e.target.value);
  };

  const saveDescription = () => {
    console.log("Descrption Updated Succesfully", editableDescription);
  };

  return (
    <div>
      <button className="info__button" onClick={showImageDetails}>
        <img src="/images/information.png" alt="Information" />
      </button>

      {showImage && (
        <div className="image__modal" onClick={closeImage}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <img src={image.urls.regular} alt={image.alt_description} />

            <div className="image__details">
              <div className="description__editor">
                <h1 className="description__editor__h1">Information</h1>
                <textarea
                  value={editableDescription}
                  onChange={handleDescriptionChange}
                />
                <button className="save__button" onClick={saveDescription}>
                  <img
                    src="/images/Save.png"
                    alt="Saved Logo"
                    className="save__button__logo"
                  />
                </button>
              </div>
              <div className="download__button__modal">
                <DownloadButton image={image} />
              </div>

              <p>Likes: {image.likes}</p>
              <p className="modal__dimensions">
                {image.width}x{image.height}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoButton;
