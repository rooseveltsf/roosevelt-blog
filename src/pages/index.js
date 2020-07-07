import React from "react";

import Layout from "../components/Layout";
import Footer from '../components/Footer';
import ContentHome from '../components/ContentHome';

const IndexPage = () => {
  return (
    <Layout title="Home">
      <ContentHome />
      <Footer />
    </Layout>
  )
}
export default IndexPage
