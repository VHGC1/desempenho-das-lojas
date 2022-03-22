import React from "react";
import Search from "../../Assets/search.svg";
import { Form, WrapperFaturamentoMin, WrapperSearch } from "./Filter.styled";

const Filter = ({ setSearch, setFaturamentoMin }) => {
  return (
    <Form>
      <WrapperSearch>
        <input
          type="text"
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Pesquisa"
        />
        <Search />
      </WrapperSearch>

      <WrapperFaturamentoMin>
        <label htmlFor="faturamentoMin">FaturamentoMin minimo esperado</label>
        <input
          type="number"
          id="faturamentoMin"
          placeholder="15.000,00"
          pattern="^[0-9]*$"
          onChange={({ target }) => setFaturamentoMin(target.value)}
        />
      </WrapperFaturamentoMin>
    </Form>
  );
};

export default Filter;
