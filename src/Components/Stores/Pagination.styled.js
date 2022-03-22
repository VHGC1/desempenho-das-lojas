import styled from "styled-components";
import { css } from "styled-components";

export const TableWrapper = styled("div")`
  height: 384.4px;

  @media (max-width: 50rem) {
    & {
      margin-bottom: 3rem;
    }
  }
`;

export const PagesWrapper = styled("div")`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

export const ArrowButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #e2e2e2;
    fill: #e2e2e2;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      color: #e2e2e2;
      fill: #e2e2e2;
    `};
`;

export const PageButton = styled(ArrowButton)`
  font-family: inherit;
  font-weight: bold;
  margin: 0 0.5rem;
  margin-bottom: 3px;
`;
