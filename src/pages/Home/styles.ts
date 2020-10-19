import styled, { css } from 'styled-components';

import { wrapper } from '../../styles/wrapper';

interface TestsProps {
  onMouseDown: any;
  onMouseMove: any;
  onMouseUp: any;
}

interface DotProps {
  onClick: any;
  value: string;
}

export const Container = styled.main``;

export const Wrapper = styled(wrapper)``;

export const Hero = styled.div`
  display: flex;
  justify-content: center;

  padding: 3rem 0;

  & > .heroWrapper {
    grid-template-columns: 1fr 1.2fr;
    column-gap: 5.92%;

    @media (max-width: 69rem) {
      grid-template-columns: 1fr;

      row-gap: 4.5rem;
    }
  }

  @media (max-width: 69rem) {
    padding: 0;
  }

  @media (max-width: 36rem) {
    padding: 0;
  }
`;

export const HeroContent = styled.div`
  padding-top: 4rem;

  max-width: 32.5rem;

  & h1 {
    font: var(--headingXLarge);
    color: var(--brandSecondaryDark);

    transition: all 0.8s;

    & span {
      color: var(--brandPrimary);
    }
  }

  & > p {
    padding: 1.5rem 0 3rem;

    font: var(--textLarge);
  }

  @media (max-width: 79rem) {
    & h1 {
      font: var(--headingLargeResponsive);
    }
  }

  @media (max-width: 69rem) {
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-self: center;

    & h1 {
      text-align: center;
    }

    & p {
      text-align: center;
    }
  }

  @media (max-width: 36rem) {
    max-width: 20.5rem;

    padding-top: 2rem;

    & > p {
      padding: 1.75rem 0 2.5rem;

      font: var(--textSmall);
      line-height: 1.5rem;
    }
  }

  @media (max-width: 32rem) {
    & h1 {
      font: var(--headingMediumResponsive);
    }
  }
`;

export const HeroBackground = styled.div`
  padding-right: 9%;
  max-width: 39rem;

  @media (max-width: 69rem) {
    justify-self: center;

    padding-right: 0;
  }
`;

export const BusinessEnglish = styled.div`
  display: flex;
  justify-content: center;

  padding: 5rem 0;

  & > .businessWrapper {
    grid-template-areas:
      'img content'
      'bullets bullets';
    column-gap: 11.84%;
    row-gap: 2.5rem;

    padding-top: 2.5rem;
    border-radius: 1rem 1rem 0 0;
    background-color: var(--brandSecondaryLightest);

    @media (max-width: 69rem) {
      grid-template-areas:
        'content'
        'img'
        'bullets';
      row-gap: 3.5rem;

      padding-top: 4rem;
    }
  }

  @media (max-width: 36rem) {
    padding: 4rem 0 0.5rem;
  }
`;

export const BusinessEnglishBackground = styled.div`
  grid-area: img;

  margin-left: 4.5rem;

  max-width: 28rem;

  @media (max-width: 69rem) {
    justify-self: center;

    margin-left: 0;
  }
`;

export const BusinessEnglishContent = styled.div`
  grid-area: content;

  align-self: center;

  margin-right: 4.5rem;

  max-width: 30rem;

  & > p {
    margin-bottom: 3rem;

    font: var(--textLarge);
  }

  @media (max-width: 69rem) {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;

    margin-right: 0;

    text-align: center;

    & > p {
      text-align: center;
    }
  }

  @media (max-width: 36rem) {
    padding: 0 1.5rem;

    & > p {
      font: var(--textSmall);
      line-height: 1.5rem;
    }
  }
`;

export const BusinessEnglishBullets = styled.ul`
  grid-area: bullets;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 4.5rem 0;
  border-radius: 0 0 1rem 1rem;

  background-color: var(--brandSecondaryDark);

  width: 100%;

  & li {
    display: flex;
    align-items: center;

    justify-self: center;

    position: relative;

    font: var(--textLarge);
    color: var(--neutralPrimaryLightest);

    & strong {
      margin-left: 1rem;
    }
  }

  & li:nth-child(1)::after {
    content: '';

    display: block;

    position: absolute;
    left: 140%;

    width: 1px;
    height: 88px;

    background-color: var(--neutralPrimaryLightest);

    transition: all 0.8s;
  }

  & li:nth-child(3)::before {
    content: '';

    display: block;

    position: absolute;
    right: 140%;

    width: 1px;
    height: 88px;

    background-color: var(--neutralPrimaryLightest);

    transition: all 0.8s;
  }

  @media (max-width: 79rem) {
    & li:nth-child(1)::after {
      left: 120%;
    }

    & li:nth-child(3)::before {
      right: 120%;
    }
  }

  @media (min-width: 51.8rem) and (max-width: 69rem) {
    padding: 3.5rem 0;

    & li {
      font: var(--textMedium);

      & svg {
        width: 18px;
      }
    }

    & li:nth-child(1)::after {
      left: 112%;

      width: 0.5px;
      height: 44px;
    }

    & li:nth-child(2) {
      align-items: flex-start;
      left: 16%;

      & > strong {
        max-width: 64%;
      }
    }

    & li:nth-child(3)::before {
      right: 112%;

      width: 0.5px;
      height: 44px;
    }
  }

  @media (max-width: 51.8rem) {
    grid-template-columns: 1fr;
    row-gap: 3rem;

    padding: 3.5rem 0;

    & li {
      font: var(--textMedium);

      & svg {
        width: 18px;
      }
    }

    & li:nth-child(2)::after {
      content: '';

      display: flex;
      flex-direction: column;

      width: 44px;
      height: 0.5px;

      background-color: var(--neutralPrimaryLightest);
    }

    & li:nth-child(2)::after {
      position: relative;
      top: 140%;
      left: -44%;

      box-shadow: 0 -5rem currentColor;
    }

    & li:nth-child(1)::after,
    & li:nth-child(3)::before {
      display: none;
    }
  }

  @media (max-width: 25rem) {
    & li {
      font: var(--textSmall);

      & strong {
        margin-left: 0.5rem;
      }
    }
  }
`;

export const TestsPreparation = styled.div`
  display: flex;
  justify-content: center;

  padding: 4rem 0;

  & .testsWrapper {
    row-gap: 2rem;
  }

  @media (min-width: 48.5rem) and (max-width: 69rem) {
    padding: 1rem 0;

    & .testsWrapper {
      margin: 0;
    }
  }
`;

export const TestsPreparationHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & a {
    display: flex;
    align-items: center;

    padding: 1.5rem 0 1.5rem 1.5rem;

    font: var(--textButton);
    color: var(--brandPrimary);

    &:hover {
      color: var(--brandPrimaryDark);
    }

    & > svg {
      padding-left: 0.75rem;
    }
  }

  @media (max-width: 69rem) {
    margin: 0 8%;
  }

  @media (max-width: 48.5rem) {
    justify-content: center;

    text-align: center;

    & a {
      display: none;
    }
  }
`;

export const TestsPreparationContent = styled.div<TestsProps>`
  display: grid;
  column-gap: 4%;

  grid-template-columns: repeat(3, minmax(20rem, auto));

  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  & > a {
    display: none;
  }

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 80rem) {
    column-gap: 1.5rem;
  }

  @media (min-width: 48.6rem) and (max-width: 69rem) {
    grid-template-columns: 4% repeat(3, minmax(40%, 1fr)) 4%;
    column-gap: 4%;

    & > div:first-child {
      grid-column: 2;
    }
  }

  @media (max-width: 48.5rem) {
    grid-template-columns: 1fr;

    & .spaceRight {
      display: none;
    }

    & > a {
      display: flex;
      justify-self: center;

      max-width: 13.5rem;

      margin-top: 2rem;
    }
  }
`;

export const NavDots = styled.div`
  display: none;

  @media (min-width: 48.5rem) and (max-width: 69rem) {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
  }
`;

export const Dot = styled.span<DotProps>`
  display: block;

  margin: 0.25rem;

  height: 0.5rem;
  width: 0.5rem;

  border-radius: 50%;
  background-color: var(--neutralPrimary);

  ${(props) =>
    props.value === 'dotOne' &&
    css`
      &:nth-child(1) {
        background-color: var(--brandPrimary);
      }
    `}

  ${(props) =>
    props.value === 'dotTwo' &&
    css`
      &:nth-child(2) {
        background-color: var(--brandPrimary);
      }
    `}

  ${(props) =>
    props.value === 'dotThree' &&
    css`
      &:nth-child(3) {
        background-color: var(--brandPrimary);
      }
    `}
`;

export const About = styled.div`
  display: flex;
  justify-content: center;

  padding: 7.5rem 0 9.5rem;

  & .aboutWrapper {
    grid-template-columns: minmax(24rem, 1fr) minmax(24rem, 39rem);
    column-gap: 8.55%;
  }

  @media (max-width: 69rem) {
    padding: 5rem 0 3.5rem;
  }

  @media (max-width: 60rem) {
    & .aboutWrapper {
      grid-template-columns: 1fr;
      row-gap: 3.5rem;

      max-width: 30.5rem;

      & > div {
        text-align: center;
      }
    }
  }

  @media (max-width: 48.5rem) {
    padding: 0.5rem 0 2.5rem;
  }

  @media (max-width: 36rem) {
    & .aboutWrapper {
      max-width: 20.5rem;
    }
  }
`;

export const AboutContent = styled.div`
  & > p {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AboutBackground = styled.div`
  align-self: flex-end;

  @media (max-width: 78rem) {
    align-self: center;
  }
`;
