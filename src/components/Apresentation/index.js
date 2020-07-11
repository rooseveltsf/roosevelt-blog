import React from 'react';

import Line from '../Line'
import { Container } from './styles';

function Apresentation({ color, title, description, left}) {
  return (
    <Container left={left}>
      {left ? (
        <>
          <Line color={color} />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <Line color={color} />
        </>
      )}
      
    </Container>
  )
}

export default Apresentation;