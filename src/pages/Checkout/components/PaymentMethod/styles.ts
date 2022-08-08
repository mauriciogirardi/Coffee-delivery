import styled from "styled-components";

export const PaymentContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px;

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`;

export const PaymentWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ButtonPayment = styled.button`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme["gray-300"]};
  border-radius: 6px;
  font-size: 0.75rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  gap: 0.9rem;

  svg {
    color: ${({ theme }) => theme["purple-900"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme["gray-500"]};
  }

  &.selected {
    background-color: ${({ theme }) => theme["purple-100"]};
    border-color: ${({ theme }) => theme["purple-900"]};
  }
`;
