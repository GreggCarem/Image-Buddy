import "./Load.scss";
function loadMoreButton({ onLoadMore }) {
  return (
    <>
      <button className="load__more" onClick={onLoadMore}>
        {" "}
        Load More{" "}
      </button>
    </>
  );
}
export default loadMoreButton;
