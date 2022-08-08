import styled from "styled-components";

export const Form = styled.form`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px;

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`;

export const WrapperForm = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;

  div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  div:nth-child(2) {
    grid-area: 2 / 1 / 3 / 4;
  }
  div:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  div:nth-child(4) {
    grid-area: 3 / 2 / 4 / 4;
  }
  div:nth-child(5) {
    grid-area: 4 / 1 / 5 / 2;
  }
  div:nth-child(6) {
    grid-area: 4 / 2 / 5 / 3;
  }
  div:nth-child(7) {
    grid-area: 4 / 3 / 5 / 4;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
