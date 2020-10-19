import React from 'react';

import { Container } from './styles';

interface Props {
  overline: string;
  subtitle: string;
}

const Subtitle: React.FC<Props> = ({ overline, subtitle }) => {
  return (
    <Container>
      <span>{overline}</span>
      <h2>{subtitle}</h2>
    </Container>
  );
};

export default Subtitle;
