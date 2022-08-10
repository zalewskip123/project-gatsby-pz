import * as React from "react";
import PageInfo from "../components/PageInfo/Pageinfo";
import { graphql } from "gatsby";
import AboutPreview from "../components/AboutPreview/AboutPreview";

const pageData = {
  title: 'about',
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const AboutPage = ({ data }) => {
  return (
    <>
      <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
      <AboutPreview image={data.datoCmsAbout.imageAuthor.fluid} author={data.datoCmsAbout.author} aboutContent={data.datoCmsAbout.aboutContent}/>
    </>
  )
}

export const query = graphql`
  {
    datoCmsAbout {
      aboutContent
      author
      imageAuthor {
        fluid(maxWidth: 800, maxHeight: 1200) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage

export const Head = () => <title>About Page</title>