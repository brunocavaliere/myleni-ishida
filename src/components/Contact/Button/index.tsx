import React from 'react';

import { ReactComponent as SendIcon } from '../../../assets/icon_send.svg';

import { Container } from './styles';

const Button: React.FC = () => {
  return (
    <Container type="submit">
      <span>Enviar</span>
      <SendIcon />
    </Container>
  );
};

export default Button;
