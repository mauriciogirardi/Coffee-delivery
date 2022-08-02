import styled from "styled-components";
import { lightTheme } from "../../styles/themes/light";

interface ContainerTahInfoProps {
  backgroundIcon: keyof typeof lightTheme;
}

export const ContainerTahInfo = styled.div<ContainerTahInfoProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1000;

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme["gray-700"]};
  }

  > div {
    width: 2rem;
    height: 2rem;
    background-color: ${({ backgroundIcon, theme }) => theme[backgroundIcon]};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
