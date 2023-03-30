import React, { useRef, useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Select from "react-select";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const {
    searchTerm,
    setSearchTerm,
    option,
    selectedOption,
    handleSelect,
    theme,
  } = useGlobalContext();

  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCountries = (e) => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const [searchValue, setSearchValue] = useState(() => {
  //   const saved = localStorage.getItem("searchValue");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });

  // const searchCountries = (e) => {
  //   setSearchValue(e.target.value);
  //   setSearchTerm(JSON.parse(localStorage.getItem("searchValue")));
  // };

  // useEffect(() => {
  //   localStorage.setItem("searchValue", JSON.stringify(searchValue));
  // }, [searchValue]);

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <label htmlFor="name"></label>
          <input
            className="search-input"
            type="text"
            id="name"
            placeholder=" &#xF002;    Search for a country..."
            // value={searchValue}
            ref={searchValue}
            // onChange={searchCountries}
            onChange={searchCountries}
          />
        </div>
      </form>
      <div className="search-select">
        <Select
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              // borderColor:
              //   theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
              borderColor:
                theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
              backgroundColor:
                // borderColor: state.isFocused ? "yellow" : "green",
                theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
              // outline: "none",
              // borderColor: state.isFocused ? "white" : "#42f58a",
              // "&:hover": {
              //   // Overwrittes the different states of border
              //   borderColor: state.isFocused ? "red" : "blue",
              // },
            }),
            placeholder: (provided) => ({
              ...provided,
              color: theme === "dark" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 52%)",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: theme === "dark" ? "hsl(0, 0%, 98%)" : "hsl(0, 0%, 52%)",
            }),
          }}
          options={option}
          placeholder="Filter By Region"
          value={selectedOption}
          onChange={handleSelect}
          isSearchable={true}
        />
      </div>
    </section>
  );
};

export default SearchForm;
