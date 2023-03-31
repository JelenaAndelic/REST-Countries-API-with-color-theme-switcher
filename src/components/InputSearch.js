import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import { useRef } from "react";

export const InputSearch = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchCountries = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          aria-label="Search"
          className="search-input"
          type="text"
          id="name"
          placeholder=" &#xF002;    Search for a country..."
          ref={searchValue}
          value={searchTerm}
          onChange={searchCountries}
        />
      </div>
    </form>
  );
};
