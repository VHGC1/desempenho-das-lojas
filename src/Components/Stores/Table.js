import React from "react";
import {
  Faturamento,
  StoresTable,
  TableBody,
  TableHeader,
} from "./Table.styled";

const Table = ({ faturamento, data }) => {
  return (
    <StoresTable>
      <TableHeader>
        <th>Loja</th>
        <th>Faturamento</th>
      </TableHeader>
      <TableBody>
        {data.map(({ name, revenue,state }) => (
          <tr key={name}>
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
