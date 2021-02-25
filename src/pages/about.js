import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// Import component styles
import styles from './about.module.less'

// Import components
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'

import Button from '../components/button/button'

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rjp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1140) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div className={styles.imgContain}>
      
      {/* <div className={`${styles.polygon} ${styles.polygonTop}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,0 0,100 100,100"
            opacity="1" />
        </svg>
      </div> */}

      <Img
        className={styles.imgRjp}
        fluid={data.placeholderImage.childImageSharp.fluid} />
      
      {/* <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,0 10,100 100,0"
            opacity="1" />
        </svg>
      </div> */}
    </div>
  )
}

const About = () => (
  <Layout>
    <SEO title='Ryan J Peterson' />

    <PageHeader>
      Developer. Designer. Author.<br />
      Butler to e-learning kids.
    </PageHeader>

    <section className={styles.intro}>
      {/* <div className={`${styles.polygon} ${styles.polygonTop}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="0,0 0,100 100,100"
            opacity="1" />
        </svg>
      </div> */}
      
      <Image />

      <div className={styles.content}>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
        
        <Button color='white' />
      </div>
      
      {/* <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,100 100,0 30,0"
            opacity="1" />
        </svg>
      </div> */}
    </section>

    <section className={styles.white}>

      <h2>H2 Heading here</h2>

      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
      
      {/* <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,100 100,0 30,0"
            opacity="1" />
        </svg>
      </div> */}
    </section>

    <SectOrange title='Title goes here'>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

      <Button
        color='white'
        copy="Let's go!" />
    </SectOrange>
    
    <SectPreFooter />

  </Layout>
)

export default About
