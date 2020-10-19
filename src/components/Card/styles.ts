import styled, { css } from 'styled-components';

interface CardsProps {
  value: number;
}

export const Container = styled.div<CardsProps>`
  padding: 3rem 3rem 2.5rem 3rem;

  border-radius: 16px;
  background-color: var(--brandSecondaryLightest);

  ${(props) =>
    css`
      @media (min-width: 48.5rem) and (max-width: 69rem) {
        transform: translate3d(${props.value}%, 0, 0);

        transition: all 0.8s;
      }
    `};

  scroll-snap-align: start;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 3rem;

    margin-bottom: 2rem;

    box-shadow: 0px 15px 40px -10px rgba(196, 196, 207, 0.5);
    border-radius: 8px;

    color: var(--complementaryPrimary);
  }

  & > h4 {
    font: var(--headingXSmall);
    color: var(--brandSecondaryDark);
  }

  & > p {
    margin: 1rem 0 1.5rem;
  }

  & > a {
    display: inline-flex;
    align-items: center;

    padding: 0.5rem 0.5rem 0.5rem 0;

    color: var(--brandPrimary);

    transition: all 0.2s;

    &:hover {
      color: var(--brandPrimaryDark);
    }

    &:hover svg path {
      fill: var(--brandPrimaryDark);
    }

    & strong {
      margin-left: 1rem;
    }

    & svg path {
      fill: var(--brandPrimary);

      transition: all 0.2s;
    }
  }

  @media (min-width: 69rem) and (max-width: 79rem) {
    padding: 2rem 1.5rem 1.5rem 2rem;
  }

  @media (max-width: 57rem) {
    padding: 1.5rem 1rem 1rem 1.5rem;
  }

  @media (max-width: 48.5rem) {
    margin: 0 auto 1.5rem;
    padding: 3rem 3rem 2.5rem 3rem;

    max-width: 24rem;
  }
`;
