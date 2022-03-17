import styled from "styled-components";

export const Form = styled("form")`
  padding: 25px 130px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: flex-end;
`;

export const WrapperSearch = styled("div")`
  display: flex;
  border: 1px solid #000;

  & input {
    width: 100%;
    border: none;
  }
`;

export const WrapperFaturamento = styled("div")`
  display: flex;
  flex-direction: column;
`;
