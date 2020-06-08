import React, { useState, createContext } from "react";

export const LogInContext = createContext();
export const ContextApi = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LogInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {props.children}
    </LogInContext.Provider>
  );
};
