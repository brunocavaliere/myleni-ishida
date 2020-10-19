import React, { useState, ChangeEvent } from 'react';

import Subtitle from '../Subtitle';
import Input from './Input';
import SelectInput from './Select';
import Button from '../Button';

import imgContact from '../../assets/contact_img.svg';
import { ReactComponent as MailIcon } from '../../assets/icon_mail.svg';
import { ReactComponent as WhatsAppIcon } from '../../assets/icon_whatsapp.svg';
import { ReactComponent as SendIcon } from '../../assets/icon_send.svg';

import { Wrapper, Container, Background, Content } from './styles';

const Contact: React.FC = () => {
  const [subject, setSubject] = useState('');

  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const { id, value } = event.target;

    setInputData({ ...inputData, [id]: value });
  }

  function handleInputChangePhone(event: ChangeEvent<HTMLInputElement>): void {
    let valuePhone = event.target.value;
    const { id } = event.target;

    valuePhone = valuePhone.replace(/^(\d{2})(\d)/, '($1) $2');
    valuePhone = valuePhone.replace(/(\d{5})(\d)/, '$1 $2');

    setInputData({ ...inputData, [id]: valuePhone });
  }

  return (
    <Container id="contact">
      <Wrapper>
        <Background>
          <Subtitle
            overline="Contato"
            subtitle="Deseja receber mais informações?"
          />

          <div className="imgBg">
            <img src={imgContact} alt="Ilustração Formulário de Contato" />
          </div>

          <ul>
            <li>
              <MailIcon />
              <span>hi@myleniishida.com.br</span>
            </li>
            <li>
              <WhatsAppIcon />
              <span>(19) 98719 - 5333</span>
            </li>
          </ul>
        </Background>

        <Content>
          <h4>Vamos conversar!</h4>

          <form>
            <Input
              type="text"
              id="name"
              label="Nome"
              placeholder="Nome"
              value={inputData.name}
              onChange={handleInputChange}
              required
            />

            <Input
              type="email"
              id="email"
              label="E-mail"
              placeholder="E-mail"
              value={inputData.email}
              onChange={handleInputChange}
              required
            />

            <Input
              type="text"
              id="whatsapp"
              label="WhatsApp"
              placeholder="WhatsApp"
              value={inputData.whatsapp}
              onChange={handleInputChangePhone}
              maxLength={15}
              required
            />

            <SelectInput
              type="select"
              id="subject"
              value={subject}
              setValue={setSubject}
            />

            <Button
              to={`https://api.whatsapp.com/send?phone=5519987195333&text=Olá,%20Myleni!%20Tudo%20bem?%20Eu%20me%20chamo%20${inputData.name}%20e%20gostaria%20de%20mais%20informações%20sobre%20o%20${subject}.%20Pode%20me%20responder%20por%20aqui%20ou%20me%20envie%20um%20email%20para%20${inputData.email}.`}
            >
              Enviar
              <SendIcon />
            </Button>
          </form>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Contact;
