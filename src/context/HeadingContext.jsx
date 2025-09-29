import React, { createContext, useState, useContext } from "react";

const HeadingContext = createContext();

export const HeadingProvider = ({ children }) => {
  const [heading, setHeading] = useState("Dashboard");

  return (
    <HeadingContext.Provider value={{ heading, setHeading }}>
      {children}
    </HeadingContext.Provider>
  );
};

export const useHeading = () => useContext(HeadingContext);
