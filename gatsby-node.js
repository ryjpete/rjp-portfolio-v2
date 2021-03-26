/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulNovel {
        edges {
          node {
            contentful_id
            slug
          }
        }
      }
    }
  `)

  if (result.error) {
    reporter.panic('error loading data', JSON.stringify(result.errors))
  }

  result.data.allContentfulNovel.edges.map(novel => {
    actions.createPage({
      path: `/novels/${novel.node.slug}`,
      component: require.resolve('./src/templates/pageNovel.js'),
      context: {
        slug: novel.node.slug,
      },
    })
  })
}