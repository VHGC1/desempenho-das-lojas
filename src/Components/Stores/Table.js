import React from "react";
import {
  Faturamento,
  StoresTable,
  TableBody,
  TableHeader,
} from "./Table.styled";

const Table = ({ faturamentoFilter, data }) => {
  return (
    <StoresTable>
      <TableHeader>
        <th>Loja</th>
        <th>Faturamento</th>
      </TableHeader>
      <TableBody>
        {data.map(({ name, revenue }) => (
          <tr key={name}>
            <td>{name}</td>
            <Faturamento faturamento={faturamentoFilter} revenue={revenue}>
              R$ {revenue}
            </Faturamento>
          </tr>
        ))}
      </TableBody>
    </StoresTable>
  );
};

export default Table;
