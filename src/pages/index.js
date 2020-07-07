import React from "react";

import Layout from "../components/Layout";
import Footer from '../components/Footer';
import { Container, ContainerTitle, Line, ContainerData, LineMid } from "./styles";

const IndexPage = () => (
  <Layout title="Home">
    <Container>

      <ContainerTitle>
        <Line color='#3B93FB' />
        <h2>Meu<br/>
          Portfólio</h2>
      </ContainerTitle>
      <ContainerData>
        <div>
          <h3>Roosevelt de Souza</h3>
          <p>Desenvolvedor full-stack</p>
        </div>
        <Line color='#FB3B3B' />
      </ContainerData>
    </Container>
    <Footer />
  </Layout>
)

export default IndexPage
