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
  box-shadow: rgb(198, 195, 195) 0px 0px 5px 1px;
  padding: 0.76rem;
  border-radius: 5px;

  & input {
    width: 100%;
    border: none;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const WrapperFaturamento = styled("div")`
  display: flex;
  flex-direction: column;

  & label {
    margin-bottom: 0.5rem;
  }

  & input {
    width: 70%;
    text-align: end;
    border: none;
    box-shadow: rgb(198, 195, 195) 0px 0px 5px 1px;
    padding: 0.8rem;
    border-radius: 5px;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
  }
`;
