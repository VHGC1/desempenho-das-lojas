import React from "react";
import { Wrapper } from "./Stores.styled";
import Table from "./Table";

const Stores = ({ faturamento }) => {
  return (
    <Wrapper>
      <div>
        <Table faturamento={faturamento} />
      </div>
      <div>map</div>
    </Wrapper>
  );
};

export default Stores;
