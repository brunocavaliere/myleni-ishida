import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column-reverse;

  max-width: 24rem;

  margin-bottom: 2.5rem;

  & label {
    opacity: 0;

    margin-left: -1rem;
    margin-bottom: 0.125rem;

    font: var(--textSmall);
    color: var(--neutralPrimaryDarkest);

    transition: all 0.8s;
  }

  & input {
    padding: 0.25rem 0;

    outline: 0;
    border: none;
    border-bottom: 1px solid var(--neutralPrimaryDark);

    font: var(--textLarge);
    color: var(--neutralPrimaryDark);

    &:focus::placeholder {
      opacity: 0;
    }
  }

  ${(props) =>
    props.isFocused &&
    css`
      label {
        opacity: 1;

        margin-left: 0;
      }

      input {
        border-bottom: 1px solid var(--neutralPrimaryDarkest);
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

    @media (max-width: 58rem) {
    max-width: 36rem;
  }
`;
