import React, { useRef, useEffect } from "react";
import { InputSearch } from "./InputSearch";
import { SelectSearch } from "./SelectSearch";

const SearchForm = () => {
  return (
    <section className="search">
      <InputSearch />
      <SelectSearch />
    </section>
  );
};

export default SearchForm;
