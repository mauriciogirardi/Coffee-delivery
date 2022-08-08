import styled from "styled-components";

export const CardCoffeeSelectedContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  border-bottom: 1px solid ${({ theme }) => theme["gray-400"]};
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const CardCoffeeSelectedWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    max-width: 210px;
  }

  > p {
    font-weight: bold;
  }
`;

export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
