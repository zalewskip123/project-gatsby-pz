import * as React from "react";
import PageInfo from "../components/PageInfo/Pageinfo";
import GalleryPreview from "../components/GalleryPreview/GalleryPreview";
import { graphql } from "gatsby";
import styled from "styled-components";

const pageData = {
  title: 'gallery',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const GalleriesColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  padding-bottom: 50px;
`;

const GalleryPage = ({ data }) => {
  const { allDatoCmsGallery: { nodes }} = data;
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <GalleriesColumn>
        {nodes[0].galleryImages.map(({id, image}) => (
          <GalleryPreview image={image.fluid} key={id}/>
        ))}
      </GalleriesColumn>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsGallery {
      nodes {
        galleryImages {
          image {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          id
        }
      }
    }
  }
`;

export default GalleryPage

export const Head = () => <title>Gallery Page</title>