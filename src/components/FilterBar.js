import React from "react";
import Select from "react-select";
import { useGlobalContext } from "../context";

const FilterBar = () => {
  const { countries, selectedOption, handleSelect } = useGlobalContext();

  return (
    <Select
      // options={}
      placeholder="Filter By Region"
      value={selectedOption}
      onChange={handleSelect}
      isSearchable={true}
    />
  );
};

export default FilterBar;
