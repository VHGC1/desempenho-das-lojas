import styled from "styled-components";

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
`;

export const PageButton = styled(ArrowButton)`
  font-family: inherit;
  font-weight: bold;
  margin: 0 0.5rem;
  margin-bottom: 3px;
`;
