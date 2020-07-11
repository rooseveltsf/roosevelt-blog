import React from 'react';
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const Avatar = () => {

  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "avatar.png" }) {
        childImageSharp {
          fluid(maxWidth: 210) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Image style={{
    borderRadius: '50%',
  }} fluid={avatarImage.childImageSharp.fluid} />
};

export default Avatar;