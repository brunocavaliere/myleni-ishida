import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';

import { ReactComponent as InstagramIcon } from '../../assets/icon_instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icon_facebook.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/icon_linkedin.svg';
import logoHeader from '../../assets/logo.svg';

import { Container, Wrapper, MenuBurger, Nav, Menu, Social } from './styles';

const Header: React.FC = () => {
  const [match, setMatch] = useState<any | null>(null);
  const [activeMenu, setActiveMenu] = useState(false);

  function useMenu(media: any): boolean {
    useEffect(() => {
      function changeMatch(): void {
        const { matches } = window.matchMedia(media);
        setMatch(matches);
      }

      window.addEventListener('resize', changeMatch);

      return () => {
        window.removeEventListener('resize', changeMatch);
      };
    }, [media]);

    return match;
  }

  const mediaResponsive = '(max-width: 69rem)';

  if (window.innerWidth < 1104 && match === null) {
    setMatch(true);
  }

  const responsive = useMenu(mediaResponsive);

  return (
    <Container id="menu">
      <Wrapper>
        <Link to="/">
          <img src={logoHeader} alt="Logo Myleni Ishida" />
        </Link>

        {responsive && (
          <MenuBurger
            type="button"
            aria-label="Menu"
            className={`${activeMenu && 'buttonActive'}`}
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <span />
          </MenuBurger>
        )}

        <Nav
          className={`${responsive ? 'menuNavResponsive' : 'menuNav'} ${
            responsive && activeMenu && 'menuNavResponsiveActive'
          }`}
        >
          <Menu>
            <li className="dropdown">
              <a
                onClick={() => setActiveMenu(false)}
                className="dropbtn"
                href="#business"
              >
                Aulas
                <FiChevronDown size={20} />
              </a>
              <div className={`${!responsive && 'dropdownContent'}`}>
                <a onClick={() => setActiveMenu(false)} href="#business">
                  Business English
                </a>
                <a onClick={() => setActiveMenu(false)} href="#tests">
                  Tests Preparation
                </a>
              </div>
            </li>

            <li>
              <a onClick={() => setActiveMenu(false)} href="#about">
                Sobre mim
              </a>
            </li>

            <li>
              <a onClick={() => setActiveMenu(false)} href="#contact">
                Contato
              </a>
            </li>
          </Menu>

          <span className="line" />

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
        </Nav>
      </Wrapper>
    </Container>
  );
};

export default Header;
