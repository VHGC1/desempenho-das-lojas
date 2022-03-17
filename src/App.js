import React from "react";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"

const App = () => {
  const [search, setSearch] = React.useState("")
  const [faturamento, setFaturamento] = React.useState("")

  return (
    <>
      <NavBar />
      <Filter setSearch={setSearch} setFaturamento={setFaturamento} />
    </>
  );
};

export default App;
