import React, { useState, useEffect, useContext } from "react";
import data from "./data.json";
const allRegions = ["All", ...new Set(data.map((country) => country.region))];

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState(data);
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
    if (!selectedOption || selectedOption.value === "All") {
      let updatedList = [...data];
      updatedList = updatedList.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(updatedList);
    } else if (selectedOption.value === "All") {
      setCountries(data);
    } else {
      const filteredList = data.filter(
        (country) => country.region === selectedOption.value
      );
      setCountries(filteredList);

      let updatedList = [...filteredList];
      updatedList = updatedList.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCountries(updatedList);
    }
  }, [selectedOption, searchTerm]);

  // useEffect(() => {
  //   let updatedList = [...data];
  //   updatedList = updatedList.filter((country) =>
  //     country.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setCountries(updatedList);
  // }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
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
