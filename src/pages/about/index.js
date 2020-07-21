import React from 'react';

import Layout from "../../components/Layout";
import Footer from '../../components/Footer';
import Apresentation from '../../components/Apresentation';

import { InfoApresentation, Infos, ListTechs, Contacts, LinksSocials, Formations } from '../../utils/infoUser';

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
  
  return (
    <Layout title="Sobre">
      <Apresentation
        title={InfoApresentation.title}
        description={InfoApresentation.description}
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

          <h3>{Formations.title}</h3>
          <Line />

          <Formation>
            <p><span>Instituição: </span>{Formations.instituicao}</p>
            <p><span>Escolaridade: </span>{Formations.escolaridade}</p>
            <p><span>Curso: </span>{Formations.curso}</p>
          </Formation>
        </InfoContainer>

        <ContactsContainer>
          <h3>{Contacts.title}</h3>
          <p>{Contacts.description}</p>
          <Line />
          <Contact>
            <p><span>Tel: </span>{Contacts.fone}</p>
            <p><span>E-mail: </span>{Contacts.email}</p>
          </Contact>

          <h3>{LinksSocials.title}</h3>
          <Line />
          <Socials>
            {LinksSocials.list.map(link => 
              <a key={link.name} rel="noreferrer" target="_blank" href={link.url}>{link.name}</a>
            )}
          </Socials>
        </ContactsContainer>

        <TechsContainer>
          <h3>{ListTechs.title}</h3>
          <Line />

          {ListTechs.list.map(tech => (
            <li key={tech.name}>
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