import { createContext, useContext, useState } from "react";


const SelectedContext = createContext();

export function SelectedProvider({ children }) {

  const [currentSelected, setCurrentSelected] = useState('');
  

  const [selectedTitle, setSelectedTitle] = useState('');


  const contextValue = {
    currentSelected,
    setCurrentSelected,
    selectedTitle,
    setSelectedTitle
  };

  return (
    <SelectedContext.Provider value={contextValue}>
      {children}
    </SelectedContext.Provider>
  );
}

export function useSelectedContext() {
  const context = useContext(SelectedContext);
  

  if (!context) {
    throw new Error("useSelectedContext must be used within a SelectedProvider");
  }
  
  return context;
}
