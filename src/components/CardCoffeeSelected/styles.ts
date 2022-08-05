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

export const ButtonRemove = styled.button`
  border: 0;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 6px;
  height: 2rem;
  width: 5.688rem;
  background-color: ${({ theme }) => theme["gray-400"]};
  font-size: 0.75rem;
  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  :hover {
    background-color: ${({ theme }) => theme["gray-500"]};
  }

  svg {
    color: ${({ theme }) => theme["purple-900"]};
  }
`;
