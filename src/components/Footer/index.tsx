import React from 'react';

import { ReactComponent as InstagramIcon } from '../../assets/icon_instagram-footer.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icon_facebook-footer.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icon_linkedin-footer.svg';
import logoFooter from '../../assets/logo_footer.svg';

import { Container, Wrapper, Content, Copyright, Social } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <a href="#menu" className="logo">
            <img src={logoFooter} alt="Logo Myleni Ishida" />
          </a>

          <div>
            <h6>Aulas</h6>

            <ul className="listFooter">
              <li>
                <a href="#business">Business English</a>
              </li>
              <li>
                <a href="#tests">TOEIC</a>
              </li>
              <li>
                <a href="#tests">IELTS</a>
              </li>
              <li>
                <a href="#tests">TOEFL</a>
              </li>
            </ul>
          </div>

          <div>
            <h6>Contato</h6>

            <ul className="listFooter">
              <li>
                <a href="teste">hi@myleniishida.com.br</a>
              </li>
              <li>
                <a href="teste">(19) 98719 - 5333</a>
              </li>
            </ul>
          </div>

          <div>
            <h6>Siga-me</h6>

            <Social>
              <li>
                <a
                  href="https://www.instagram.com/myleni.ishida/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/mylenibusinessenglish/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon />
                </a>
              </li>
              <li>
                <a
                  href="https://br.linkedin.com/in/myleniishida"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinIcon />
                </a>
              </li>
            </Social>
          </div>
        </Content>

        <Copyright>
          <p>© Myleni Ishida 2020</p>
        </Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
