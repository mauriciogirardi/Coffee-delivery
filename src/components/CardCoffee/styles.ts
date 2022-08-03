import styled from "styled-components";

export const CardCoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme["gray-100"]};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 0 1.5rem 1.5rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: contain;
    margin-top: -2rem;
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2", cursive;
  color: ${({ theme }) => theme["gray-900"]};
  font-size: 1.35rem;
  font-weight: bolder;
`;

export const Description = styled.strong`
  color: ${({ theme }) => theme["gray-700"]};
  font-size: 0.85rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.1rem;
  flex: 1;
`;

export const Price = styled.h3`
  font-family: "Baloo 2", cursive;
  color: ${({ theme }) => theme["gray-700"]};
  font-size: 1.5rem;
  font-weight: 900;

  > span {
    font-weight: 100;
    font-size: 0.875rem;
    padding-right: 0.2rem;
  }
`;

export const TypeCoffee = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  span {
    background-color: ${({ theme }) => theme["yellow-100"]};
    color: ${({ theme }) => theme["yellow-900"]};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.625rem;
    padding: 0.4rem;
    border-radius: 10px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
