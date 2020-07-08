import React from 'react';

import Line from '../Line'
import { Container } from './styles';

function Apresentation({ color, title, description}) {
  return (
    <Container>
      <Line color={color} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Container>
  )
}

export default Apresentation;