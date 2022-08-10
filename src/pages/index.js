import * as React from "react";
import Button from "../components/Button/Button";
import { graphql } from "gatsby";
import styled from "styled-components";
import Post from "../components/Post/Post";
import Image from "gatsby-image";

const ContentWrapper = styled.div`
  width: 65%;
  height: calc(100vh - 80px);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    font-size: 85px;
    margin: 0;
    width: 40%;
    line-height: 0.9;
  }

  p {
    margin: 20px 0 40px;
    width: 40%;
  }
`;

const ImageWrapper = styled(Image)`
  position: absolute !important;
  height: 100%;
  top: 0;
  right: 0;
  width: 35%;
  object-fit: cover;
`;

const IndexPage = ({data}) => {
  return (
    <>
      <ContentWrapper>
        <Post />
        <h1>Your new space</h1>
        <p>While artists work from real to the abstact, architects must work from the abstract to the real.</p>
        <Button>estimate project</Button>
      </ContentWrapper>
      <ImageWrapper fluid={data.file.childImageSharp.fluid}/>
    </>
  )
}

export const query = graphql`
  {
    file(name: {eq: "hero"}) {
      childImageSharp {
        fluid(
          maxWidth: 800
          maxHeight: 1200
          quality: 100
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage

export const Head = () => <title>Home Page</title>
