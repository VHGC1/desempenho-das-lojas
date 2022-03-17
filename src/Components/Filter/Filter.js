import React from "react";
import Search from "../../Assets/search.svg";
import { Form, WrapperFaturamento, WrapperSearch } from "./Filter.styled";

const Filter = ({ setSearch, setFaturamento }) => {
  return (
    <Form>
      <WrapperSearch style={{ display: "flex" }}>
        <input
          type="text"
          onChange={({ target }) => setSearch(target.value)}
          placeholder="Pesquisa"
        />
        <img src={Search} alt="" />
      </WrapperSearch>

      <WrapperFaturamento>
        <label htmlFor="faturamento">Faturamento minimo esperado</label>
        <input
          type="number"
          id="faturamento"
          placeholder="15.000,00"
          pattern="^[0-9]*$"
          onChange={({ target }) => setFaturamento(target.value)}
        />
      </WrapperFaturamento>
    </Form>
  );
};

export default Filter;
