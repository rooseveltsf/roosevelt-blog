import React from 'react';

import { Header, Line } from './styles';

const Apresentation = ({ title, description }) => (
  <Header>
    <h2>{title}</h2>
    <p>{description}</p>
    <Line />
  </Header>
)

export default Apresentation;