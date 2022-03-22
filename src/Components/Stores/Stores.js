import React from "react";
import Pagination from "./Pagination";
import { TableWrapper, Wrapper } from "./Stores.styled";
import Table from "./Table";
import data from "../../data.json";
import Map from "./Map";

const Stores = ({ faturamentoMin, search }) => {
  const [paginatedData, setPaginatedData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [sortByColumn, setSortByColumn] = React.useState({
    key: "name",
    direction: "ascending",
  });
  
  const { stores } = data;

  React.useEffect(() => {
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
  }, [sortByColumn])

  React.useEffect(() => {
    setFilteredData(
      stores?.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Wrapper>
      <div>
        <TableWrapper>
          <Table
            data={paginatedData}
            faturamentoMinFilter={faturamentoMin}
            sortByColumn={sortByColumn}
            setSortByColumn={setSortByColumn}
          />
        </TableWrapper>

        <Pagination
          data={filteredData}
          dataLimit={10}
          setPaginatedData={setPaginatedData}
        />
      </div>
      <div>
        <Map paginatedData={paginatedData} faturamentoMin={faturamentoMin} />
      </div>
    </Wrapper>
  );
};

export default Stores;
