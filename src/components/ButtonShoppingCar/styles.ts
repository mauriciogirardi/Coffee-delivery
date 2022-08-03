import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 2.275rem;
  width: 2.275rem;
  background-color: ${({ theme }) => theme["purple-900"]};
  color: ${({ theme }) => theme.white};
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 6px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme["purple-400"]};
  }
`;
