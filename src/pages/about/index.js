import React from 'react';

import Layout from "../../components/Layout";
import InfoUser from '../../components/InfoUser'
import Techs from '../../components/Techs'
import Footer from '../../components/Footer'

import Apresentation from '../../components/Apresentation'
import { Container } from './styles';

const AboutPage = () => {
  return (
    <Layout title="Sobre">
      <Container>
        <Apresentation
          left
          color='#FBB03B'
          title='Sobre'
          description='Aqui falarei um pouco sobre mim, e sobre as 
          tecnologias que são usadas nos meus projetos.'
        />
        
        <InfoUser />

        <Techs />

      </Container>
      <Footer />
    </Layout>
  )
}

export default AboutPage;