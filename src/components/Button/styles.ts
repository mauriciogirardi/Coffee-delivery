import styled from "styled-components";
import { lightTheme } from "../../styles/themes/light";

interface ButtonContainerProps {
  backgroundHover: keyof typeof lightTheme;
  background: keyof typeof lightTheme;
  color: keyof typeof lightTheme;
  fontSize: number;
  width: number | string;
  height: number | string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${({ theme, background }) => theme[background]};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ theme, color }) => theme[color]};
  height: ${({ height }) =>
    typeof height === "string" ? height : height + "rem"};
  width: ${({ width }) => (typeof width === "string" ? width : width + "rem")};
  border: 0;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background-color: ${({ theme, backgroundHover }) => theme[backgroundHover]};
  }
`;
