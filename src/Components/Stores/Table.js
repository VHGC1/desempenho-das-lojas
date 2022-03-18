import React from "react";

import data from "../../data.json";
import {
  Faturamento,
  StoresTable,
  TableBody,
  TableHeader,
} from "./Table.styled";

const Table = ({ faturamento }) => {
  const { stores } = data;

  return (
    <StoresTable>
      <TableHeader>
        <th>Loja</th>
        <th>Faturamento</th>
      </TableHeader>
      <TableBody>
        {stores.map(({ name, revenue }) => (
          <tr>
            <td>{name}</td>
            <Faturamento faturamento={faturamento} revenue={revenue}>
              R$ {revenue}
            </Faturamento>
          </tr>
        ))}
      </TableBody>
    </StoresTable>
  );
};

export default Table;
