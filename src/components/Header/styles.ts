import styled from 'styled-components';

import { wrapper } from '../../styles/wrapper';

export const Container = styled.header`
  display: flex;
  justify-content: center;

  height: 5rem;
`;

export const Wrapper = styled(wrapper)`
  grid-template-columns: 1fr 3fr;
  align-items: center;

  @media (max-width: 69rem) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MenuBurger = styled.button`
  justify-self: flex-end;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 2rem;
  height: 2rem;

  padding: 0;

  background-color: transparent;
  border: none;
  outline: none;

  transition: all 0.4s;

  & span {
    position: relative;

    width: 1.125rem;
    height: 0.1rem;

    z-index: 150;

    border-radius: 0.1rem;
    background-color: var(--brandSecondaryDark);

    transition: all 0.4s;

    &::before,
    &::after {
      content: '';

      display: block;

      position: absolute;

      width: 100%;
      height: 100%;

      border-radius: 0.1rem;
      background-color: var(--brandSecondaryDark);

      transition: all 0.4s;
    }

    &::before {
      top: 6px;
    }

    &::after {
      bottom: 6px;
    }
  }

  &:hover span,
  &:hover span::before,
  &:hover span::after {
    background-color: var(--brandPrimaryDark);
  }

  &.buttonActive {
    z-index: 150;
  }

  &.buttonActive span {
    position: fixed;

    transform: rotate(45deg);
  }

  &.buttonActive span::after,
  &.buttonActive span::before {
    transform: rotate(90deg);
    top: 0;
    bottom: 0;
  }

  &.buttonActive span::before {
    background-color: transparent;
  }
`;

export const Nav = styled.nav`
  &.menuNav {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .line {
      display: block;

      height: 1rem;
      width: 0.0625rem;

      background-color: var(--neutralPrimary);
    }
  }

  &.menuNavResponsive {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    background-color: var(--neutralPrimaryLightest);

    margin-top: -100vh;

    transition: transform 0.8s cubic-bezier(0.8, 0.24, 0.04, 1);
  }

  &.menuNavResponsiveActive {
    z-index: 100;

    transform: translateY(100vh);
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  margin-right: 2rem;

  .dropdown {
    position: relative;
  }

  .dropdown:hover .dropbtn {
    color: var(--brandPrimaryDark);
  }

  .dropdownContent {
    min-width: 10rem;

    position: absolute;
    z-index: 10;

    background-color: var(--neutralPrimaryLightest);
    opacity: 0;

    font-size: 14px;

    pointer-events: none;
    transition: all 0.4s;

    & > a {
      justify-content: flex-start;

      padding: 0.25rem 1rem;
    }
  }

  .dropdown:hover .dropdownContent {
    display: flex;
    flex-direction: column;

    opacity: 1;

    pointer-events: initial;
  }

  li {
    margin-left: 1.5rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      color: var(--neutralPrimaryDark);

      transition: all 0.4s;

      &:hover {
        color: var(--brandPrimaryDark);
      }

      svg {
        margin-left: 0.5rem;
      }
    }

    @media (max-width: 69rem) {
      & > div > a {
        font: var(--headingXSmall);
        color: var(--neutralPrimary);
      }
    }
  }

  @media (max-width: 69rem) {
    flex-direction: column;
    justify-content: center;

    text-align: center;

    margin-right: 0;
    margin-bottom: 4rem;

    li {
      margin: 0 0 2rem 0;

      a {
        font: var(--headingMedium);

        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;

export const Social = styled.ul`
  display: flex;
  align-items: center;

  margin-left: 2.5rem;

  & li a {
    display: flex;
    padding: 0.5rem;

    & svg path {
      transition: all 0.4s;
    }

    &:hover svg path {
      fill: var(--brandPrimaryDark);
    }
  }

  & li:nth-child(3) a {
    padding-right: 0px;
  }

  @media (max-width: 69rem) {
    margin-left: 0;

    & li a {
      padding: 1rem;
    }

    & li a svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    & li:nth-child(3) a {
      padding-right: 0.5rem;
    }
  }
`;
