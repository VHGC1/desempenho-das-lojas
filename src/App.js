import React from "react";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Table from "./Components/Stores/Table";
import Stores from "./Components/Stores/Stores";
import Pagination from "./Components/Stores/Pagination";
import data from "./data.json"

const App = () => {
  const [search, setSearch] = React.useState("")
  const [faturamento, setFaturamento] = React.useState("15000")

  React.useEffect(() => {
    if(faturamento.length === 0) setFaturamento("15000")
  }, [faturamento])

  return (
    <>
      <NavBar />
      <Filter setSearch={setSearch} setFaturamento={setFaturamento} />
      <Stores faturamento={faturamento} />
    </>
  );
};

export default App;
