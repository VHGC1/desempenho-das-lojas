import React from "react";
import Pagination from "./Pagination";
import { Wrapper } from "./Stores.styled";
import Table from "./Table";
import data from "../../data.json";

const Stores = ({ faturamento }) => {
  const [paginetedData, setPaginetedData] = React.useState(null);
  const { stores } = data;

  React.useEffect(() => {
    console.log(paginetedData)
  }, [paginetedData])

  return (
    <Wrapper>
      <div>
        <Pagination
          data={stores}
          RenderComponent={Table}
          pageLimit={5}
          dataLimit={10}
          faturamento={faturamento}
          setPaginetedData={setPaginetedData}
        />
      </div>
      <div>map</div>
    </Wrapper>
  );
};

export default Stores;
