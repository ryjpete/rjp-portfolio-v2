import React from 'react'
// import { Link } from 'gatsby'

import styles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
// import Image from '../components/image/image'

const IndexPage = () => (
  <Layout>
    <SEO title='Ryan Peterson' />

    <PageHeader>
      Hi.<br/>
      I'm Ryan.<br />
      I create things.
    </PageHeader>

    <section className={styles.welcome}>
      <p>Welcome. First things first: I wear many hats. I’m a developer, designer, writer, artist, and musician. The first two are my profession. The third would be awesome to call a profession, though I’m not there yet. The last two are hobbies.</p>
    </section>
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    
    {/* <Link to='/page-2/'>Go to page 2</Link> <br />
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
