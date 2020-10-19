import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column-reverse;

  & label {
    opacity: 0;

    margin-left: -1rem;
    margin-bottom: 0.125rem;

    font: var(--textSmall);
    color: var(--neutralPrimaryDarkest);

    transition: all 0.8s;
  }

  ${(props) =>
    props.isFocused &&
    css`
      label {
        opacity: 1;

        margin-left: 0;
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      label {
        opacity: 1;

        margin-left: 0;
      }
    `}
`;
