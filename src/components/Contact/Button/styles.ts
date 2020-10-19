import styled from 'styled-components';

export const Container = styled.button`
  display: inline-flex;
  align-items: center;

  margin-top: 3rem;
  padding: 0 2rem;

  outline: none;
  height: 3.5rem;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--brandPrimary);

  font: var(--textButton);
  color: var(--neutralPrimaryLightest);

  transition: all 0.4s;

  &:hover {
    background-color: var(--brandPrimaryDark);
  }

  & span {
    margin-right: 0.75rem;
  }
`;
