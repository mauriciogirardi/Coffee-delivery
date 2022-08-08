import styled from "styled-components";

export const CheckoutContainer = styled.section`
  margin-top: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-top: 10rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  @media screen and (max-width: 500px) {
    margin-top: 9rem;
  }
`;

export const Title = styled.h3`
  font-family: "Baloo 2", cursive;
  font-size: 1.125rem;
  color: ${({ theme }) => theme["gray-800"]};
  font-weight: bold;

  position: absolute;
  top: -2.5rem;
  left: 0;
`;

export const FormWrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const Order = styled.div`
  position: relative;
  width: 100%;
  max-width: 28rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px 46px;

  @media screen and (max-width: 820px) {
    max-width: 100%;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    padding: 1.5rem;
  }
`;

export const ButtonCheckout = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 0;
  border-radius: 6px;
  margin-top: 1.5rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme["yellow-500"]};
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme["yellow-100"]};
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme["yellow-900"]};
  }
`;

export const AutoOverflow = styled.div`
  overflow-y: auto;
  max-height: 400px;
  padding-right: 5px;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    margin-left: 1rem;
    background: #dad7d7;
  }
`;

export const WarningContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 20rem);
  gap: 2rem;

  > h1 {
    text-align: center;
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    color: ${({ theme }) => theme["gray-700"]};
    font-weight: bold;
  }

  > svg {
    color: ${({ theme }) => theme["yellow-500"]};
    font-size: 10rem;
  }
`;
