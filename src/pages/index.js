import React from 'react'

import styles from './index.module.less'
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import Button from '../components/button/button'

const IndexPage = () => (
  <Layout>
    <SEO title='Developer, Designer, and Author' />

    <PageHeader>
      Hey.<br/>
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

      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
      
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
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

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
  </Layout>
)

export default IndexPage
