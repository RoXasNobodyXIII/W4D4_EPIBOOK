import { createContext, useContext, useState } from "react";
const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [currentSearchValue, setCurrentSearchValue] = useState("");
  
  const [selectedCategory, setSelectedCategory] = useState("fantasy");
  

  const [activePage, setActivePage] = useState(
    parseInt(new URLSearchParams(window.location.search).get("page")) || 1
  );


  const contextValue = {
    currentSearchValue,
    setCurrentSearchValue,
    selectedCategory,
    setSelectedCategory,
    activePage,
    setActivePage
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchValue() {
  const context = useContext(SearchContext);
  
 
  if (!context) {
    throw new Error("useSearchValue must be used within a SearchProvider");
  }
  
  return context;
}
