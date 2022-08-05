import styled from "styled-components";

export const CheckoutContainer = styled.section`
  margin-top: 4rem;
  padding: 0 1rem;
  display: flex;
  align-items: flex-start;
  gap: 2rem;
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

export const Form = styled.form`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px;
`;

export const WrapperForm = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0.75rem;
  grid-row-gap: 1rem;

  div:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  div:nth-child(2) {
    grid-area: 2 / 1 / 3 / 4;
  }
  div:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  div:nth-child(4) {
    grid-area: 3 / 2 / 4 / 4;
  }
  div:nth-child(5) {
    grid-area: 4 / 1 / 5 / 2;
  }
  div:nth-child(6) {
    grid-area: 4 / 2 / 5 / 3;
  }
  div:nth-child(7) {
    grid-area: 4 / 3 / 5 / 4;
  }
`;

export const Payment = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px;
`;

export const Order = styled.div`
  position: relative;
  width: 100%;
  max-width: 28rem;
  padding: 2.5rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 6px 46px;
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

  &:hover {
    background-color: ${({ theme }) => theme["yellow-900"]};
  }
`;

export const DescriptionOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1rem;
`;

export const WrapperDescriptionOrder = styled.div`
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

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
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
