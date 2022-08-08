import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  height: 100vh;
`;

export const SuccessInfo = styled.div`
  width: 100%;
  text-align: left;

  > h1 {
    font-family: "Baloo 2", cursive;
    color: ${({ theme }) => theme["yellow-900"]};
    font-size: 2rem;
  }

  > p {
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 1.25rem;
  }
`;

export const SuccessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const SuccessDescription = styled.div`
  border: 1px solid #dbac2c;
  border-radius: 6px 36px;
  padding: 2.5rem;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
