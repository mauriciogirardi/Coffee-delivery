import styled from "styled-components";

export const ContainerAmount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
`;

export const WrapperAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${({ theme }) => theme["gray-700"]};

  h2 {
    color: ${({ theme }) => theme["gray-800"]};
    font-size: 1.25rem;
  }
`;
