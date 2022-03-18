import React from "react";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Table from "./Components/Stores/Table";
import Stores from "./Components/Stores/Stores";

const App = () => {
  const [search, setSearch] = React.useState("")
  const [faturamento, setFaturamento] = React.useState("15000")

  return (
    <>
      <NavBar />
      <Filter setSearch={setSearch} setFaturamento={setFaturamento} />
      <Stores faturamento={faturamento} />
    </>
  );
};

export default App;
