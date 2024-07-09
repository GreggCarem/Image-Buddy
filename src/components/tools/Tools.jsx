import React, { useState } from "react";
import "./Tools.scss";
import Save from "../save/Save";
import SearchInput from "../SearchInput/SearchInput.jsx";

function Tools() {
  const [query, setQuery] = useState("");

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="green__box">
        <Save />
        <SearchInput query={query} handleSearchChange={handleSearchChange} />
      </div>
    </>
  );
}

export default Tools;
