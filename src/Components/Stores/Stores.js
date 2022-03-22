import React from "react";
import Pagination from "./Pagination";
import { TableWrapper, Wrapper } from "./Stores.styled";
import Table from "./Table";
import data from "../../data.json";
import Map from "./Map";

const Stores = ({ faturamentoMin, search }) => {
  const [paginatedData, setPaginatedData] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState([]);
  const { stores } = data;

  React.useEffect(() => {
    setFilteredData(
      stores.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <Wrapper>
      <div>
        <TableWrapper>
          <Table data={paginatedData} faturamentoMinFilter={faturamentoMin} />
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
