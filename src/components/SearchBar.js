import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Rechercher un élève ..." />
    </div>
  );
};

export default SearchBar;
