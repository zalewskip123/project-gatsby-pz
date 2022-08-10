const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  /*
  const result = await graphql(`
    query queryArticles {
        allMdx {
            nodes {
                frontmatter {
                    title
                    slug
                    author
                    featuredImage {
                        childImageSharp {
                            fluid(maxWidth: 700, maxHeight: 500) {
                                src
                            }
                        }
                    }
                }
                body
            }
        }
    }  
  `);

   //console.log(result.data.allMdx.nodes);

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      // Path for this page — required
      path: `articles/${post.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        post
      },
    })
  })

  */

  const result = await graphql(`
  query queryCMSPage {
    allDatoCmsArticle {
      nodes {
        id
        title
      }
    }
  }
  `);

  result.data.allDatoCmsArticle.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.title, {lower: true})
    createPage({
      path: `articles/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id
      },
    })
  })
}