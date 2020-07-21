import React from 'react';

import Layout from "../../components/Layout";
import Footer from '../../components/Footer';
import Apresentation from '../../components/Apresentation';

import { Infos, ListTechs } from '../../utils/infoUser';

import {
  Line,
  Container,
  InfoContainer,
  Info,
  ContainerImg,
  Formation,
  TechsContainer,
  ContactsContainer,
  Contact,
  Socials
} from './styles';

import Avatar from '../../components/Avatar';

const AboutPage = () => {
  // const breakpoints = useBreakpoint();
  
  return (
    <Layout title="Sobre">
      <Apresentation
        title='Sobre'
        description='Conheçam um pouco o dono do blog'
      />
      <Container>
        <InfoContainer>
          <Info>
            <ContainerImg>
              <Avatar />
            </ContainerImg>
            <div>
              {Infos.map(info => <p><span>{info.title}: </span>{info.content}</p>)}
            </div>
          </Info>

          <h3>Formação</h3>
          <Line />

          <Formation>
            <p><span>Instituição: </span>Centro Universitário de João Pessoa - UNIPÊ</p>
            <p><span>Escolaridade: </span>Curso Superior(Cursando)</p>
            <p><span>Curso: </span>Ciência da Computação</p>
          </Formation>
        </InfoContainer>

        <ContactsContainer>
          <h3>Contato</h3>
          <p>Entre em contato por meio desses contatos</p>
          <Line />
          <Contact>
            <p><span>Tel: </span>(83) 9 9803-9933</p>
            <p><span>E-mail: </span>rooseveltsouzav12@gmail.com</p>
          </Contact>

          <h3>Redes sociais</h3>
          <Line />
          <Socials>
            <a href="/">Instagram</a>
            <a href="/">Github</a>
            <a href="/">Linkedin</a>
          </Socials>
        </ContactsContainer>

        <TechsContainer>
          <h3>Tecnologias</h3>
          <Line />

          {ListTechs.map(tech => (
            <li>
              <strong>{tech.name}</strong>
              <p>{tech.description}</p>
            </li>
          ))}
        </TechsContainer>
      </Container>
      <Footer />
    </Layout>
  )
}

export default AboutPage;