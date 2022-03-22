import React from "react";
import Pagination from "./Pagination";
import { Wrapper } from "./Stores.styled";
import Table from "./Table";
import data from "../../data.json";
import Map from "./Map";

const Stores = ({ faturamentoMin, search }) => {
  const [paginetedData, setPaginetedData] = React.useState(null);
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
        <Table data={paginetedData} faturamentoMinFilter={faturamentoMin} />
        <Pagination
          data={filteredData}
          dataLimit={10}
          setPaginetedData={setPaginetedData}
        />
      </div>
      <div>
        <Map paginetedData={paginetedData} faturamentoMin={faturamentoMin} />
      </div>
    </Wrapper>
  );
};

export default Stores;
