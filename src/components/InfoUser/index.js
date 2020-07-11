import React from 'react';

import Avatar from '../Avatar';
import Line from '../Line';

import { Container, AvatarContainer, Info } from './styles';

function InfoUser() {
  return (
    <Container>
      <AvatarContainer>
        <Avatar />
      </AvatarContainer>
      <Info>
        <h2>Sobre mim</h2>
        <p>
          Olá, me chamo Roosevelt de Souza, tenho 20 
          anos. Sou estudante de Ciência da computação 
          na Unipê, sou desenvolvedor full-stack e 
          atualmente atuo com a linguagem de 
          programação Javascript.
        </p>
      </Info>
    </Container>
  )
}

export default InfoUser;