import React from "react";
import {
  FaturamentoMin,
  StoresTable,
  TableBody,
  TableHeader,
} from "./Table.styled";

const Table = ({
  faturamentoMinFilter,
  data,
  sortByColumn,
  setSortByColumn,
}) => {
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortByColumn.key === key && sortByColumn.direction === "ascending") {
      direction = "descending";
    }
    setSortByColumn({ key: key, direction: direction });
  };

  return (
    <StoresTable dataSize={data?.length}>
      <TableHeader>
        <tr>
          <th>
            <span onClick={() => requestSort("name")}>Loja</span>
          </th>
          <th>
            <span onClick={() => requestSort("revenue")}>Faturamento</span>
          </th>
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
