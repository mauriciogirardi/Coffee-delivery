import styled from "styled-components";

export const InfoCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  > div > h4 {
    font-size: 1rem;
    color: ${({ theme }) => theme["gray-800"]};
    font-weight: 400;
  }

  > div > p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["gray-600"]};
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
