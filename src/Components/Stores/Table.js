import React from "react";
import {
  FaturamentoMin,
  StoresTable,
  TableBody,
  TableHeader,
} from "./Table.styled";

const Table = ({ faturamentoMinFilter, data, setSortByColumn }) => {
  return (
    <StoresTable dataSize={data?.length}>
      <TableHeader>
        <tr>
          <th onClick={() => setSortByColumn("name")}>Loja</th>
          <th onClick={() => setSortByColumn("revenue")}>Faturamento</th>
        </tr>
      </TableHeader>
      <TableBody>
        {data?.map(({ name, revenue }) => (
          <tr key={name}>
            <td>{name}</td>
            <FaturamentoMin
              faturamentoMin={faturamentoMinFilter}
              revenue={revenue}
            >
              R$ {revenue}
            </FaturamentoMin>
          </tr>
        ))}
      </TableBody>
    </StoresTable>
  );
};

export default Table;
