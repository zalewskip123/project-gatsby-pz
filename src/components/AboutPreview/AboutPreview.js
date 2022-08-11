import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';

const DivContent = styled.div`
  float: left;
  width: 50%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  height: 100%;
  top: 0;
  right: 0;
  width: 50%;
  object-fit: cover;
`;

const AboutContentP = styled.p`
  font-size: 20px;
  padding: 30px 65px 0 0;
`;

const Authorp = styled.p`
  font-weight: bold;
  font-size: 40px;
`;

const StyledHr = styled.hr`
  position: absolute !important;
  border: 2px solid black;
  left: 0;
  width: 50%;
  object-fit: cover;
`;

const AboutPreview = ({ image, author, aboutContent }) => (
  <>
    <DivContent>
      <StyledHr />
        <AboutContentP>{aboutContent}</AboutContentP>
          <Authorp>{author}</Authorp>
          <StyledHr />
    </DivContent>
    <StyledImage fluid={image} />
  </>
);

export default AboutPreview;
