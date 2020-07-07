import React from 'react';
import PropsTypes from 'prop-types';

import Layout from '../../components/Layout';
import Line from '../../components/Line';

import { Apresentation, ListPost } from './styles';
import PostItem from '../../components/PostItem';

const colors = [
  '#F7FB3B',
  '#A73BFB',
  '#FB3BE8',
  '#3BFB5A',
  '#3BFBD8',
  '#3B93FB',
  '#C9FB3B',
  '#FB3B3B',
  
]

const ProjectsPage = () => (
  <Layout title="Projetos">
    <Apresentation>
      <Line color='#A73BFB' />
      <div>
        <h3>Projetos</h3>
        <p>Aqui será listado alguns projetos desenvolvidos 
          por mim,<br/>e detalhes sobre eles. </p>
      </div>
    </Apresentation>
    <PostItem
      color={colors[Math.floor(Math.random() * colors.length)]}
      title="DevRadar"
      description="Descrição sobre o DevRadar"
      tag="DV"
      url="dev-radar"
    />
    <PostItem
      color={colors[Math.floor(Math.random() * colors.length)]}
    />
    <PostItem
      color={colors[Math.floor(Math.random() * colors.length)]}
    />
  </Layout>
);

export default ProjectsPage;