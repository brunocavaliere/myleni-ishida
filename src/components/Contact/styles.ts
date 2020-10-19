import styled from 'styled-components';

import { wrapper } from '../../styles/wrapper';

import ContactBg from '../../assets/contact_bg.png';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  padding: 6rem 0 5.5rem;

  background: url(${ContactBg});
  background-repeat: no-repeat;
  background-size: 100% 34.5rem;

  @media (max-width: 36rem) {
    padding: 3rem 0 4rem;
  }
`;

export const Wrapper = styled(wrapper)`
  grid-template-columns: minmax(20rem, 28rem) minmax(22rem, 30rem);
  column-gap: 17.76%;

  transition: all 0.8s;

  @media (max-width: 76rem) {
    column-gap: 14%;
  }

  @media (max-width: 58rem) {
    grid-template-columns: 1fr;

    margin: 0 16%;
  }

  @media (max-width: 36rem) {
    margin: 0 4%;
  }
`;

export const Background = styled.div`
  padding-top: 2.5rem;

  & .imgBg {
    margin: 5rem auto;

    max-width: 19.5rem;

    &::after {
      content: '';

      display: block;

      position: relative;
      top: -1.5rem;

      margin: 0 auto;

      width: 6.5rem;
      height: 0.01px;
      background-color: rgba(0, 0, 0, 0);

      box-shadow: 0px 15px 40px 10px rgba(196, 196, 207, 0.72);
    }
  }

  & > ul {
    display: flex;
    justify-content: space-between;

    color: var(--neutralPrimaryDark);

    & li {
      display: flex;
      align-items: center;

      & svg {
        margin-right: 0.5rem;
      }
    }

    & li:nth-child(1) svg path {
      stroke: var(--complementaryPrimary);
    }

    & li:nth-child(2) svg {
      width: 1.125rem !important;
      height: 1.125rem !important;
    }

    & li:nth-child(2) svg path {
      fill: var(--complementaryPrimary);
    }
  }

  @media (max-width: 69rem) {
    & .imgBg {
      margin-bottom: 4rem;
    }

    & > ul {
      flex-direction: column;
      row-gap: 1rem;
    }
  }

  @media (max-width: 58rem) {
    & div:first-child {
      margin: 0 auto;
      text-align: center;

      max-width: 20rem;
    }

    & .imgBg {
      display: none;
    }

    & > ul {
      flex-direction: column;
      row-gap: 1rem;
      align-items: center;

      margin: 3rem 0 4rem;
    }
  }

  @media (max-width: 36rem) {
    padding-top: 0;
  }
`;

export const Content = styled.div`
  padding: 4rem 3rem;

  border-radius: 16px;
  box-shadow: 0px 10px 20px -10px rgba(196, 196, 207, 0.5);
  background-color: var(--neutralPrimaryLightest);

  & > h4 {
    margin-bottom: 1rem;

    font: var(--headingSmall);
    color: var(--brandSecondaryDark);
  }

  & > form a {
    margin-top: 3rem;

    & svg {
      padding-left: 0.75rem;
    }
  }

  @media (max-width: 58rem) {
    max-width: 28rem;
    width: 100%;

    margin: 0 auto;

    & > h4 {
      text-align: center;
    }

    & form button {
      display: flex;
      margin: 3rem auto 0;
    }
  }
`;
