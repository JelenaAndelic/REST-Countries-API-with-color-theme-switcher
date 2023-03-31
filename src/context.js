import React, { useState, useEffect, useContext } from "react";
import data from "./data.json";
const allRegions = ["All", ...new Set(data.map((country) => country.region))];

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState(
    allRegions.map((item) => ({
      value: item,
      label: item,
    }))
  );
  const [selectedOption, setSelectedOption] = useState("");

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  function handleSelect(item) {
    setSelectedOption(item);
  }

  useEffect(() => {
    setLoading(true);
    if (!selectedOption || selectedOption.value === "All") {
      let updatedList = [...data];
      updatedList = updatedList.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(updatedList);
      setLoading(false);
    } else {
      const filteredList = data.filter(
        (country) => country.region === selectedOption.value
      );
      setCountries(filteredList);
      setLoading(false);

      let updatedList = [...filteredList];
      updatedList = updatedList.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(updatedList);
    }
  }, [selectedOption, searchTerm]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        loading,
        countries,
        setSearchTerm,
        option,
        selectedOption,
        handleSelect,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
