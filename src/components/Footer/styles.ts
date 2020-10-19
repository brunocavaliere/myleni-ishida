import styled from 'styled-components';

import { wrapper } from '../../styles/wrapper';

export const Container = styled.footer`
  display: flex;
  justify-content: center;

  padding: 4rem 0 3rem;

  background-color: var(--brandSecondaryDark);
`;

export const Wrapper = styled(wrapper)``;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10.52%;

  & .logo {
    min-width: 10rem;
    max-width: 11.5rem;
  }

  & div h6 {
    margin-bottom: 1.5rem;

    font: var(--headingXSmall);
    color: var(--neutralPrimaryLightest);
  }

  & .listFooter .contactFooter {
    display: flex;
    align-items: center;

    & svg {
      padding-right: 0.5rem;
    }

    & svg path {
      color: #fff;
    }

    &:first-child svg path {
      fill: #fff;
    }
  }

  & div .listFooter li {
    margin-bottom: 1.5rem;

    & > a {
      color: var(--neutralPrimaryLightest);

      transition: all 0.2s;

      &:hover {
        opacity: 0.72;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 55rem) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;

    text-align: center;

    font: var(--textSmall);

    & .logo {
      width: 10rem;

      margin: 0 auto;
    }

    & div h6 {
      margin-bottom: 1rem;

      font: var(--textMedium);
      font-weight: 600;
    }

    & div .listFooter li {
      margin-bottom: 1rem;
    }
  }
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;

  & li a {
    display: flex;
    padding: 0.5rem;

    & svg path {
      transition: all 0.4s;
    }

    &:hover svg path {
      opacity: 0.72;
    }
  }

  & li:nth-child(1) a {
    padding-left: 0px;
  }

  @media (max-width: 55rem) {
    justify-content: center;

    & li:nth-child(1) a {
      padding-left: 0.5rem;
    }
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 3.5rem;

  font: var(--textSmall);

  p {
    color: var(--neutralPrimaryLightest);
  }
`;
