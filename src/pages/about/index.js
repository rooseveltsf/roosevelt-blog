import React from 'react';

import Layout from "../../components/Layout";
import Footer from '../../components/Footer';

import {
  Header,
  Line,
  Container,
  SubContainer,
  InfoContainer,
  ContainerImg,
  Forms,
  Formation,
  Techs,
  ContactContainer,
  Contact,
  Socials
} from './styles';

import Avatar from '../../components/Avatar';

const AboutPage = () => {
  return (
    <Layout title="Sobre">
      <Header>
        <h2>Sobre</h2>
        <p>Conheçam um pouco o dono do blog</p>
        <Line />
      </Header>
      <Container>

        <SubContainer>
          <InfoContainer>
            <ContainerImg>
              <Avatar />
            </ContainerImg>

            <Forms>
              <p><span>Nome: </span>Roosevelt de Souza Santos Filho</p>
              <p><span>Data de nascimento: </span>14/02/2000</p>
              <p><span>Endereço: </span>Rua Agente Fiscal Paulo de Aquino Mendonça</p>
              <p><span>Cidade/Estado: </span>João Pessoa/PB</p>
            </Forms>
          </InfoContainer>

          <h3>Formação</h3>
          <Line />

          <Formation>
            <p><span>Instituição: </span>Centro Universitário de João Pessoa - UNIPÊ</p>
            <p><span>Escolaridade: </span>Curso Superior(Cursando)</p>
            <p><span>Curso: </span>Ciência da Computação</p>
          </Formation>

          <h3>Tecnologias</h3>
          <Line />

          
        </SubContainer>

        <ContactContainer>
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
        </ContactContainer>
        
      </Container>
      <Techs>
          <div>

            <li>
              <strong>Javascript</strong>
              <p>
                Linguagem de programação que tem o objetivo de rodar scripts no
                navegador.
              </p>
            </li>
            <li>
              <strong>Node.js</strong>
              <p>
                O node.js tem como objetivo aumentar o alcance do Javascript,
                permitindo utilizar a linguagem fora do navegador.
              </p>
            </li>
            <li>
              <strong>ReactJS</strong>
              <p>
                O ReactJS é uma biblioteca Javascript utilizada para a criação
                de Interface de usuário(UI).
              </p>
            </li>
          </div>
          <div>

            <li>
              <strong>React-Native</strong>
              <p>
                O React-Native é um framework baseado no ReactJS que tem como objetivo
                a criação de aplicativos mobile para android e IOS.
              </p>
            </li>
            <li>
              <strong>Git & Github</strong>
              <p>
                O Git é um sistema open-source de controle de versão utilizado pela grande
                maioria dos desenvolvedores atualmente.
              </p>
            </li>
          </div>
        </Techs>
      <Footer />
    </Layout>
  )
}

export default AboutPage;