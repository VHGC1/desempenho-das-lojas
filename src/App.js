import React from "react";
import Filter from "./Components/Filter/Filter";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import Stores from "./Components/Stores/Stores";

const App = () => {
  const [search, setSearch] = React.useState("");
  const [faturamento, setFaturamento] = React.useState("");

  React.useEffect(() => {
    if (faturamento.length === 0) setFaturamento("15000");
  }, [faturamento]);

  return (
    <>
      <NavBar />
      <Filter setSearch={setSearch} setFaturamento={setFaturamento} />
      <Stores faturamento={faturamento} search={search} />
    </>
  );
};

export default App;
