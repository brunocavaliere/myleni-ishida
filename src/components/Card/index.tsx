import React from 'react';

import { ReactComponent as WhatsappIcon } from '../../assets/icon_whatsapp.svg';

import { Container } from './styles';

interface Props {
  value: number;
  heading: string;
  paragraph: string;
}

const Card: React.FC<Props> = ({ value, children, heading, paragraph }) => {
  return (
    <Container value={value}>
      {children}

      <h4>{heading}</h4>
      <p>{paragraph}</p>

      <a
        href={`https://api.whatsapp.com/send?phone=5519987195333&text=Olá,%20Myleni!%20Tudo%20bem?%20Eu%20gostaria%20de%20mais%20informações%20sobre%20o%20${heading}.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon />
        <strong>Saiba mais</strong>
      </a>
    </Container>
  );
};

export default Card;
