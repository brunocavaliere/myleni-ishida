import React from 'react';

import { Container } from './styles';

interface Props {
  to: string;
}

const Button: React.FC<Props> = ({ to, children }) => {
  return <Container href={to}>{children}</Container>;
};

export default Button;
