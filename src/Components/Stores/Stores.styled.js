import styled from "styled-components"

export const Wrapper = styled("section")`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  padding: 0 130px;
  gap: 2rem;

  @media (max-width: 50rem) {
    & {
      padding: 0 50px;
      grid-template-columns: 1fr;
    }
  }
`