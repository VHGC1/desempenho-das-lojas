import React from "react";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Stores from "./Components/Stores/Stores";

const App = () => {
  const [search, setSearch] = React.useState("");
  const [faturamentoMin, setFaturamentoMin] = React.useState("");

  React.useEffect(() => {
    if (faturamentoMin.length === 0) setFaturamentoMin("15000");
  }, [faturamentoMin]);

  return (
    <>
      <NavBar />
      <Filter setSearch={setSearch} setFaturamentoMin={setFaturamentoMin} />
      <Stores faturamentoMin={faturamentoMin} search={search} />
    </>
  );
};

export default App;
