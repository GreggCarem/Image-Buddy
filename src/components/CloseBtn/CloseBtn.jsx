import "./CloseBtn.scss";

const CloseBtn = ({ closeModal }) => {
  return (
    <button className="close__btn" onClick={closeModal}>
      <img src="/images/CloseBtn.png" alt="Close Button" />
    </button>
  );
};

export default CloseBtn;
