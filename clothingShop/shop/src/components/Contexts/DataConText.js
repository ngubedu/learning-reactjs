import React, { createContext } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  return (
    <>
      <DataContext.Provider>{children}</DataContext.Provider>
    </>
  );
}

export { DataContext, DataProvider };
