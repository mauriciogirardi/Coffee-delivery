import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  max-width: 1140px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Location = styled.div`
  background-color: ${({ theme }) => theme["purple-100"]};
  color: ${({ theme }) => theme["purple-900"]};
  padding: 0.5rem;
  border-radius: 8px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

export const BagButton = styled.button`
  background-color: ${({ theme }) => theme["yellow-100"]};
  color: ${({ theme }) => theme["yellow-900"]};
  position: relative;
  border-radius: 8px;
  line-height: 0;
  border: 0;
  height: 2.375rem;
  width: 2.375rem;
`;

export const TotalItemBag = styled.p`
  background-color: ${({ theme }) => theme["yellow-900"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;

  position: absolute;
  top: -7px;
  right: -7px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
