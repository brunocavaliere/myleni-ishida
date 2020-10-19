import styled from 'styled-components';

export const Container = styled.div`
  & > span {
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--neutralPrimaryDark);
  }

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;

    font: var(--headingLarge);
    color: var(--brandSecondaryDark);

    transition: all 0.8s;
  }

  @media (max-width: 69rem) {
    & h2 {
      font: var(--headingMediumResponsive);
    }
  }

  @media (max-width: 36rem) {
    & h2 {
      font: var(--headingSmallResponsive);
    }
  }
`;
