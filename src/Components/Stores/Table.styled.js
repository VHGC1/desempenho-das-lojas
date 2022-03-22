import styled from "styled-components";

// #B75151

export const StoresTable = styled("table")`
  width: 100%;
  height: 384.8px;
  border-collapse: collapse;
  border: 1px solid #c6c3c3;
  
  & thead th, & tbody tr td {
    padding: .3rem 1rem;
  }
`;

export const TableHeader = styled("thead")`
  text-align: left;
  border-bottom: 1px solid #c6c3c3;
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
  color: ${({faturamentoMin, revenue}) => revenue < faturamentoMin ? "#B75151" : "#666"}
`
