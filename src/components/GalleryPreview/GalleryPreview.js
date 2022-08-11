import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';


const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryPreview = ({ image }) => (
  <StyledImage fluid={image} />
);

export default GalleryPreview;
