import styled from "styled-components";
import backgroundPng from "../../assets/background.png";

export const ContainerHome = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Center = styled.div`
  padding: 1.5rem 1rem;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  > img {
    width: 476px;
    height: 360px;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    gap: 1.5rem;

    > img {
      width: 300px;
    }
  }

  @media screen and (max-width: 820px) {
    gap: 1.5rem;

    > img {
      width: 300px;
    }
  }

  @media screen and (max-width: 500px) {
    position: relative;
    flex-direction: column-reverse;
    gap: 1.5rem;

    > img {
      position: absolute;
      width: 100%;
      opacity: 0.1;
    }
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 34rem;
  background-image: url(${backgroundPng});
  object-fit: contain;

  @media screen and (max-width: 768px) {
    height: 24rem;
  }
  @media screen and (max-width: 500px) {
    height: 21rem;
  }
`;

export const Wrapper = styled.div`
  h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    font-weight: bolder;
    color: ${({ theme }) => theme["gray-900"]};
    line-height: 3.5rem;
  }

  > p {
    color: ${({ theme }) => theme["gray-800"]};
    font-size: 1.25rem;
    margin-top: 1rem;
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    > h1 {
      font-size: 2rem;
      line-height: 2.5rem;
    }
    > p {
      margin-top: 0.5rem;
      font-size: 1rem;
    }
  }
`;

export const Information = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
`;

export const ProductsContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 1.7rem;
  padding: 3rem 0;

  > div {
    margin-top: 1rem;
  }

  @media screen and (max-width: 820px) {
    gap: 0.611rem;

    > div {
      margin-top: 1.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 1.7rem;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-family: "Baloo 2", cursive;
  font-size: 2rem;
  color: ${({ theme }) => theme["gray-900"]};
  font-weight: bold;
`;
