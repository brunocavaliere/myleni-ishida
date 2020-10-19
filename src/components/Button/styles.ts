import styled from 'styled-components';

export const Container = styled.a`
  display: inline-flex;
  align-items: center;

  height: 3.5rem;
  border-radius: 0.5rem;

  padding: 0 2rem;

  background-color: var(--brandPrimary);

  font: var(--textButton);
  color: var(--neutralPrimaryLightest);

  transition: all 0.4s;

  &:hover {
    background-color: var(--brandPrimaryDark);
  }

  @media (max-width: 69rem) {
    display: flex;
    justify-content: center;
  }
`;
