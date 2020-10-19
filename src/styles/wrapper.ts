import styled from 'styled-components';

export const wrapper = styled.div`
  display: grid;

  max-width: 76rem;
  width: 100%;

  margin: 0 2rem;

  transition: all 0.8s;

  @media (max-width: 69rem) {
    margin: 0 8%;
  }

  @media (max-width: 36rem) {
    margin: 0 4%;
  }
`;
