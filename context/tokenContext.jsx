import { createContext, useContext, useState } from "react";

const tokenContext = createContext(); 

export function TokenContext({children}) {
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODVlZjIzNzIzZGQwMjAwMTUxZGM0ZWEiLCJpYXQiOjE3NTQyNDA2NTYsImV4cCI6MTc1NTQ1MDI1Nn0.u0vZsLJDNr4sooc29laJZWLkA2KDW0DT_sO74DhSpDE"

  const [commentAuthor, setCommentAuthor] = useState('') ; 

  return (
    <tokenContext.Provider value={{token, commentAuthor, setCommentAuthor}}>
      {children}
    </tokenContext.Provider>
  )
}

export function useToken(){
  return useContext(tokenContext); 
}