import styled, { css } from "styled-components";

interface InputContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 2.625rem;
  width: 100%;
  background-color: ${({ theme }) => theme["gray-400"]};
  border-radius: 6px;
  padding: 0 1rem;
  border: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 1rem;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `};

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme["yellow-500"]};
    `};

  ${(props) =>
    props.isFilled &&
    css`
      border-color: ${({ theme }) => theme["yellow-500"]};
    `};

  > span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme["gray-600"]};
  }

  > input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 0.875rem;
    border: 0;
    box-shadow: none;

    &::placeholder {
      color: ${({ theme }) => theme["gray-600"]};
    }
  }
`;
