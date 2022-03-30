import React from "react";
import Pagination from "./Pagination";
import data from "../../data.json";

const Stores = ({ faturamentoMin, search }) => {
  const [filteredData, setFilteredData] = React.useState([]);
  const [sortByColumn, setSortByColumn] = React.useState({
    key: "name",
    direction: "ascending",
  });

  const { stores } = data;

  React.useMemo(() => {
    setFilteredData(
      stores.sort((a, b) => {
        if (a[sortByColumn.key] < b[sortByColumn.key]) {
          return sortByColumn.direction === "ascending" ? -1 : 1;
        }
        if (a[sortByColumn.key] > b[sortByColumn.key]) {
          return sortByColumn.direction === "ascending" ? 1 : -1;
        }
        return 0;
      })
    );
  }, [sortByColumn]);

  React.useEffect(() => {
    setFilteredData(
      stores?.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <>
      <Pagination
        data={filteredData}
        dataLimit={10}
        sortByColumn={sortByColumn}
        setSortByColumn={setSortByColumn}
        faturamentoMin={faturamentoMin}
      />
    </>
  );
};

export default Stores;
