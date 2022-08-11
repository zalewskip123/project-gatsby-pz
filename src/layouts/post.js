import React from "react";
//import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Image from "gatsby-image"

/*
const PostLayout = ({pageContext: {post}}) => {
    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.athor}</p>
            <img src={post.frontmatter.featuredImage.childImageSharp.fluid.src} alt="blank"/>
            <MDXRenderer>{post.body}</MDXRenderer>
        </div>
    );
};

*/

export const query = graphql`
query querySingleArticle($id: String!) {
    datoCmsArticle(id: {eq: $id}) {
      title
      featuredImage {
        fixed(width: 500) {
            ...GatsbyDatoCmsFixed
        }
      }
      author
      articleContent {
        ... on DatoCmsArticleImage {
          id
          imageData {
            fixed(width: 500) {
                ...GatsbyDatoCmsFixed
            }
          }
        }
        ... on DatoCmsHeading {
          id
          headingContent
        }
        ... on DatoCmsParagraph {
          id
          paragraphContent
        }
      }
    }
  }  
`;

const PostLayout = ({ data }) => {
  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <Image fixed={data.datoCmsArticle.featuredImage.fixed} />
      <div>{data.datoCmsArticle.articleContent.map(item => {
        const itemKey = Object.keys(item)[1];
        //console.log(itemKey)
        switch(itemKey) {
          case 'paragraphContent':
            return <p key={item.id}>{item.paragraphContent}</p>;
          case 'headingContent':
            return <h2 key={item.id}>{item.headingContent}</h2>;
          case 'imageData':
            return <Image key={item.id} fixed={item.imageData.fixed}/>;
          default:
            return null;
        }
      })}</div>
    </div>
  );
};

export default PostLayout;

export const Head = ({ data }) => <title>{data.datoCmsArticle.title}</title>