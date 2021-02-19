import React from 'react'
// import { Link } from 'gatsby'

import styles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import Button from '../components/button/button'

const IndexPage = () => (
  <Layout>
    <SEO title='Ryan Peterson' />

    <PageHeader>
      Hi.<br/>
      I'm Ryan.<br />
      I create things.
    </PageHeader>

    <section className={styles.welcome}>
      <div className={`${styles.polygon} ${styles.polygonTop}`}>
        {/* preserveAspectRatio: makes sure the triangle is scalable
        viewbox: points stretches from the parent */}
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,100 100,0 0,100"
            opacity="1" />
        </svg>
      </div>

      <p>Welcome. First things first: I wear many hats. I’m a developer, designer, writer, artist, and musician. The first two are my profession. The third would be awesome to call a profession, though I’m not there yet. The last two are hobbies.</p>
      
      <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        {/* preserveAspectRatio: makes sure the triangle is scalable
        viewbox: points stretches from the parent */}
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,100 100,0 0,0"
            opacity="1" />
        </svg>
      </div>
    </section>

    <section className={styles.orangeAction}>
      <h2>H2 Header</h2>

      <div className={styles.content}>
        <p>Welcome to the collection of me. Well, not actually "me," but things I've done. Whether it's designing or drawing or developing, whatever's on this site I've been a part of in some way. Some of it is through agency work. Some development on side projects. Others will be complete creative work on my own. Take a gander around. Maybe you'll like something.</p>

        <Button
          color='white'
          copy="Let's go!" />
      </div>
    </section>

    <section className={styles.blueAction}>
      <div className={styles.content}>
        <h3>H3 Header goes here blah</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>

      <Button />
      
      <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        {/* preserveAspectRatio: makes sure the triangle is scalable
        viewbox: points stretches from the parent */}
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="65,100 100,0 0,0"
            opacity="1" />
        </svg>
      </div>
    </section>
    
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    
    {/* <Link to='/page-2/'>Go to page 2</Link> <br />
    <Link to='/using-typescript/'>Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
