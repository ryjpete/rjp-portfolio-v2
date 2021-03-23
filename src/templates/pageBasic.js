// import React from 'react'

// export default function PageBasic({ pageContext: { edge } }) {
//   console.log(edge)
  
//   return (
//     <section>
//       <p>test</p>
//     </section>
//   )
// }

// // export default PageBasic
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'

export default function PageBasic({ data }) {
  console.log(data)

  return (
    <Layout>
      <div>Hello</div>
    </Layout>
  )
}

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`