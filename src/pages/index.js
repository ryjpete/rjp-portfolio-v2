import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import Image from '../components/image/image'

const IndexPage = () => (
  <Layout>
    <SEO title='Ryan Peterson' />
    
    <h1>Hi.<br />I'm Ryan.<br />I create things.</h1>
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to='/page-2/'>Go to page 2</Link> <br />
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
