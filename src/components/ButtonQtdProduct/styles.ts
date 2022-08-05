import styled from "styled-components";

export const ButtonQtdProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1px;
`;

const ButtonQtd = styled.button`
  height: 2rem;
  width: 1.8rem;
  background-color: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["purple-900"]};
  border: 0;
  cursor: pointer;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme["purple-900"]};
  }
`;

export const ButtonMinus = styled(ButtonQtd)`
  border-radius: 6px 0 0 6px;
`;

export const ButtonPlus = styled(ButtonQtd)`
  border-radius: 0 6px 6px 0;
`;

export const Value = styled.span`
  display: block;
  height: 2.275rem;
  padding: 0 0.3rem;
  background-color: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["gray-900"]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 1rem;
`;
