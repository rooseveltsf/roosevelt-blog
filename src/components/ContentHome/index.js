import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Line from '../Line';
import { Container, ContainerTitle, ContainerData } from "./styles";

function ContentHome() {

  const { site: { siteMetadata} } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          position
          title
        }
      }
    }
  `)

  const title = siteMetadata.title.split(' ');

  return (
    <Container>
      <ContainerTitle>
        <Line color='#3B93FB' />
        <h2>{title[0]}<br/>{title[1]}</h2>
      </ContainerTitle>
      <ContainerData>
        <div>
          <h3>{siteMetadata.author}</h3>
          <p>{siteMetadata.position}</p>
        </div>
        <Line color='#FB3B3B' />
      </ContainerData>
    </Container>
  )
}

export default ContentHome;