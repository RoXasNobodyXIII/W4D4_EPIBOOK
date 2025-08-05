import { useContext, createContext, useState } from "react";

const HandleCommentContext = createContext();


export function HandleCommentProvider({ children }) {

  const [currentEditingComment, setCurrentEditingComment] = useState(null);
  

  const [accordionOpenStatus, setAccordionOpenStatus] = useState(false);


  const contextValue = {
    currentEditingComment,
    setCurrentEditingComment,
    accordionOpenStatus,
    setAccordionOpenStatus
  };

  return (
    <HandleCommentContext.Provider value={contextValue}>
      {children}
    </HandleCommentContext.Provider>
  );
}


export function useHandleCommentContext() {
  const context = useContext(HandleCommentContext);
  

  if (!context) {
    throw new Error("useHandleCommentContext must be used within a HandleCommentProvider");
  }
  
  return context;
}
