import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'

// Import component styles
// import styles from './about.module.less'

// Import components
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import Button from '../components/button/button'

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "rjp.jpg" }) {
//         childImageSharp {
//           fluid(maxWidth: 1140) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return <div>Picture not found</div>
//   }

//   return (
//     <div className={styles.imgContain}>
      
//       <div className={`${styles.polygon} ${styles.polygonTop}`}>
//         <svg
//           preserveAspectRatio="none"
//           viewBox="0 0 100 100"
//         >
//           <polygon
//             points="0,0 0,100 100,100"
//             opacity="1" />
//         </svg>
//       </div>

//       <Img
//         className={styles.imgRjp}
//         fluid={data.placeholderImage.childImageSharp.fluid} />
      
//       <div className={`${styles.polygon} ${styles.polygonBottom}`}>
//         <svg
//           preserveAspectRatio="none"
//           viewBox="0 0 100 100"
//         >
//           <polygon
//             points="0,0 10,100 100,0"
//             opacity="1" />
//         </svg>
//       </div>
//     </div>
//   )
// }

const About = () => (
  <Layout>
    <SEO title='Ryan J Peterson' />

    <PageHeader>
      Developer. Designer. Author.<br />
      Butler to e-learning kids.
    </PageHeader>

    <SectIntro
      bgColor='#000000'
      top={true}
      bottom={true}
    >
      <p>You know, I've lived with myself for 40 years now. You'd think it'd be easier to write content for an about page.</p>
    </SectIntro>
    
    <SectOrange title='A Look into RJP'>
      <p>
        How to wrap all those years into a few paragraphs? Here we go...
        <br /><br />
        Creative: Writing the ABC's in marker around your entire torso.
        <br /><br />
        Inquisitive: Digging up your brother's dead lizard to "see what it was up to" ... I'm not saying my brother was happy about it. 35 years later it's still brought up with a laugh and a shake of the head. My bad.
        <br /><br />
        So that about wraps it up: Markers, dead lizards. Sprinkle in a guitar, a few White Russians, and VS Code, and there you have it.
      </p>
    </SectOrange>
    
    <SectPreFooter title='Professional and Bullet-Pointed'>
      <p>I get it. No one really wants to read everything I have to say. I don't agree with it, but I understand. So, for those that don't care about anything other than my professional life in bullet points, click the button and head to my online resume. Short and sweet.</p>
        
      <Button
        color='black'
        copy='Resume'
        href='resume' />
    </SectPreFooter>

  </Layout>
)

export default About
