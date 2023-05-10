import React, { useState } from "react";

function Search({ filterFood }) {
  const [search, setSearch] = useState("");

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
    filterFood(e.target.value);
  };

  return (
    <div>
      <input
        value={search}
        type="text"
        name="name"
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default Search;
