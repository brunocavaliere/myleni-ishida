import React, { useState, MouseEvent } from 'react';
import {
  FiAward,
  FiArrowRight,
  FiCheckSquare,
  FiEdit,
  FiCheckCircle,
} from 'react-icons/fi';

import Header from '../../components/Header';
import Button from '../../components/Button';
import Subtitle from '../../components/Subtitle';
import Card from '../../components/Card';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

import imgHero from '../../assets/hero_illustration.png';
import imgBusinessEnglish from '../../assets/business_img.png';
import imgAbout from '../../assets/about_img.png';

import {
  Container,
  Wrapper,
  Hero,
  HeroContent,
  HeroBackground,
  BusinessEnglish,
  BusinessEnglishBackground,
  BusinessEnglishContent,
  BusinessEnglishBullets,
  TestsPreparation,
  TestsPreparationHeader,
  TestsPreparationContent,
  NavDots,
  Dot,
  About,
  AboutContent,
  AboutBackground,
} from './styles';

const Home: React.FC = () => {
  const [finalPosition, setFinalPosition] = useState(0);
  const [startX, setStartX] = useState(0);
  const [movement, setMovement] = useState(0);
  const [active, setActive] = useState(false);
  const [activeDot, setActiveDot] = useState('dotOne');

  function updatePosition(clientX: number): number {
    setMovement(startX - clientX);

    return movement * -1;
  }

  function onStart(event: MouseEvent): void {
    event.preventDefault();

    setActive(true);

    setStartX(event.clientX);
  }

  function onMove(event: MouseEvent): void {
    if (active === true) {
      if (updatePosition(event.clientX) > 0) {
        setFinalPosition(0);
      } else if (updatePosition(event.clientX) < -110) {
        setFinalPosition(-110);
      } else {
        setFinalPosition(updatePosition(event.clientX));
      }
    }
  }

  function onClickDotOne(): void {
    setFinalPosition(0);

    setActiveDot('dotOne');
  }

  function onClickDotTwo(): void {
    setFinalPosition(-55);

    setActiveDot('dotTwo');
  }

  function onClickDotThree(): void {
    setFinalPosition(-110);

    setActiveDot('dotThree');
  }

  function onDotActive(): void {
    if (finalPosition > -30) {
      setActiveDot('dotOne');
    } else if (finalPosition <= -30 && finalPosition >= -80) {
      setActiveDot('dotTwo');
    } else {
      setActiveDot('dotThree');
    }
  }

  function onEnd(): void {
    setActive(false);

    onDotActive();
  }

  return (
    <>
      <Header />

      <Container>
        <Hero>
          <Wrapper className="heroWrapper">
            <HeroContent>
              <h1>
                Impulsione sua carreira com <span>inglês</span>
              </h1>
              <p>
                Seja com aulas de Business English ou com uma boa nota no IELTS,
                TOEFL ou TOEIC, prepare-se para o mercado de trabalho
                internacional.
              </p>

              <Button to="#contact">Agende uma aula-teste</Button>
            </HeroContent>

            <HeroBackground>
              <img src={imgHero} alt="Ilustração do Banner" />
            </HeroBackground>
          </Wrapper>
        </Hero>

        <BusinessEnglish id="business">
          <Wrapper className="businessWrapper">
            <BusinessEnglishBackground className="img">
              <img src={imgBusinessEnglish} alt="Imagem Business English" />
            </BusinessEnglishBackground>

            <BusinessEnglishContent className="content">
              <Subtitle overline="Aulas" subtitle="Business English" />

              <p>
                Aulas online desenvolvidas por meio de um diagnóstico das suas
                necessidades e com um plano de estudos para que você alcance seu
                objetivo.
              </p>

              <Button to="#contact">Agende uma aula</Button>
            </BusinessEnglishContent>

            <BusinessEnglishBullets className="bullets">
              <li>
                <FiCheckSquare size={30} />
                <strong>Aulas 100% online</strong>
              </li>
              <li>
                <FiCheckSquare size={30} />
                <strong>Aulas individuais ou em dupla</strong>
              </li>
              <li>
                <FiCheckSquare size={30} />
                <strong>Plano de estudos</strong>
              </li>
            </BusinessEnglishBullets>
          </Wrapper>
        </BusinessEnglish>

        <TestsPreparation id="tests">
          <Wrapper className="testsWrapper">
            <TestsPreparationHeader>
              <Subtitle overline="Aulas" subtitle="Tests Preparation" />

              <a href="#contact">
                Marque uma aula
                <FiArrowRight size={21} />
              </a>
            </TestsPreparationHeader>

            <TestsPreparationContent
              onMouseDown={onStart}
              onMouseUp={onEnd}
              onMouseMove={onMove}
            >
              <Card
                value={finalPosition}
                heading="TOEIC"
                paragraph="Preparação para o TOEIC com correção de simulados e planilha de acompanhamento de performance."
              >
                <div>
                  <FiAward size={24} />
                </div>
              </Card>

              <Card
                value={finalPosition}
                heading="IELTS"
                paragraph="Preparação completa para o IELTS com serviços de correção de Writing e Speaking."
              >
                <div>
                  <FiEdit size={24} />
                </div>
              </Card>

              <Card
                value={finalPosition}
                heading="TOEFL"
                paragraph="Preparação completa para o TOEFL com serviços de correção de Writing e Speaking."
              >
                <div>
                  <FiCheckCircle size={24} />
                </div>
              </Card>

              <div className="spaceRight" />

              <Button to="#contact">Marque uma aula</Button>
            </TestsPreparationContent>

            <NavDots>
              <Dot value={activeDot} onClick={onClickDotOne} />
              <Dot value={activeDot} onClick={onClickDotTwo} />
              <Dot value={activeDot} onClick={onClickDotThree} />
            </NavDots>
          </Wrapper>
        </TestsPreparation>

        <About id="about">
          <Wrapper className="aboutWrapper">
            <AboutContent>
              <Subtitle overline="Sobre mim" subtitle="Hi! Eu sou a Myleni." />

              <p>
                Sou professora de inglês e há sete anos venho ajudando muitos
                alunos a alcançarem seus objetivos.
              </p>
              <p>
                Sou formada em Economia e tenho experiência profissional em
                multinacionais, escolas de inglês e atualmente atuo também na
                área jurídica, onde sou servidora pública.
              </p>
              <p>
                Ao longo desses anos, busquei me especializar e criar métodos de
                aprendizagem para Business English e exames de proficiência,
                como TOEIC, IELTS e TOEFL.
              </p>
              <p>
                O meu propósito é te ajudar a desenvolver suas habilidades no
                idioma de forma clara, estratégica e alinhada à sua meta, seja
                ela profissional ou acadêmica.
              </p>
            </AboutContent>

            <AboutBackground>
              <img src={imgAbout} alt="Imagem Myleni Ishida" />
            </AboutBackground>
          </Wrapper>
        </About>
      </Container>

      <Contact />

      <Footer />
    </>
  );
};

export default Home;
