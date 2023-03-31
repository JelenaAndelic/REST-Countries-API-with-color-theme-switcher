import React from "react";
import Select from "react-select";
import { useGlobalContext } from "../context";

export const SelectSearch = () => {
  const { option, selectedOption, handleSelect, theme } = useGlobalContext();
  return (
    <div className="search-select">
      <Select
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor:
              theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
            backgroundColor:
              theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
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
  );
};
