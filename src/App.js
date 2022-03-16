import React from "react";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import GlobalStyle from "./GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Filter />
    </>
  );
};

export default App;
