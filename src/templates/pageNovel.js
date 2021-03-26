import React from 'react'
import { graphql } from 'gatsby'

// Import components
import Layout from '../components/layout/layout'

const PageNovel = ({ data }) => {
  console.log(data.allContentfulNovel.edges[0].node.title)

  return (
    <Layout>
      <h1>{data.allContentfulNovel.edges[0].node.title}</h1>
    </Layout>
  )
}

export default PageNovel

export const query = graphql`
  query($slug: String!) {
    allContentfulNovel(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          contentful_id
          slug
          title
        }
      }
    }
  }
`
