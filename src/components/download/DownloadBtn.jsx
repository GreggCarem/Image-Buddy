import "../download/DownloadBtn.scss";

import { saveAs } from "file-saver";

const DownloadButton = ({ image }) => {
  const handleDownload = () => {
    fetch(image.urls.full)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, `${image.alt_description}.jpg`);
      })
      .catch((error) => console.error("Error downloading", error));
  };

  return (
    <button
      className="download__button"
      onClick={handleDownload}
      title="Download"
    >
      <img
        className="download__button__image"
        src="./images/Download.png"
        alt="Download"
      />
    </button>
  );
};

export default DownloadButton;
