import React from "react";
import Pagination from "./Pagination";
import { Wrapper } from "./Stores.styled";
import Table from "./Table";
import data from "../../data.json";
import Map from "./Map";

const Stores = ({ faturamento, search }) => {
  const [paginetedData, setPaginetedData] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState([])
  const { stores } = data;

  // React.useEffect(() => {
  //   console.log(paginetedData)
  // }, [paginetedData])

  React.useEffect(() => {
    setFilteredData(stores.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search]);

  return (
    <Wrapper>
      <div>
        <Pagination
          data={filteredData}
          RenderComponent={Table}
          dataLimit={10}
          faturamento={faturamento}
          setPaginetedData={setPaginetedData}
        />
      </div>
      <div >
        <Map paginetedData={paginetedData} />
      </div>
    </Wrapper>
  );
};

export default Stores;
