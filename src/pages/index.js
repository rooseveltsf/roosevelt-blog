import React from "react"

import Layout from "../components/Layout"
import { ContainerTitle, Line, ContainerData, LineMid } from "./styles";

const IndexPage = () => (
  <Layout title="Home">
    <ContainerTitle>
      <Line />
      <h2>Meu<br/>
        portfólio</h2>
    </ContainerTitle>
    <ContainerData>
      <div>
        <h3>Roosevelt de Souza</h3>
        <p>Desenvolvedor full-stack</p>
      </div>
      <LineMid />
    </ContainerData>
  </Layout>
)

export default IndexPage
