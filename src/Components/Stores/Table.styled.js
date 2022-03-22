import styled from "styled-components";
import { css } from "styled-components";

export const StoresTable = styled("table")`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #c6c3c3;

  & thead th,
  & tbody tr td {
    padding: 0.3rem 1rem;
  }

  ${({ dataSize }) =>
    dataSize === 10 &&
    css`
      height: 100%;
    `}
`;

export const TableHeader = styled("thead")`
  text-align: left;
  border-bottom: 1px solid #c6c3c3;

  & tr th {
    cursor: pointer;
  }

  & tr th:hover {
    color: #c6c3c3;
  }
`;

export const TableBody = styled("tbody")`
  color: #666;

  & tr {
    border-bottom: 1px solid #c6c3c3;
  }

  & tr td:last-of-type {
    width: 50px !important;
    text-align: left;
  }
`;

export const FaturamentoMin = styled("td")`
  color: ${({ faturamentoMin, revenue }) =>
    revenue < faturamentoMin ? "#B75151" : "#666"};
`;
