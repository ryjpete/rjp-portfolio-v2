import React from 'react'

// Import components
// import Button from '../components/button/button'
import Education from '../components/sectEducation/sectEducation'
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import ProExp from '../components/sectProExp/sectProExp'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SEO from '../components/seo/seo'
import TechSkills from '../components/sectTechnicalSkills/sectTechnicalSkills'

const Resume = () => (

  <Layout>
    <SEO
      title='Ryan J Peterson, Front End Developer' />

    <PageHeader>
      Me,<br />
      but in bullet points.
    </PageHeader>    

    <SectIntro
      bgColor='#000000'
      top={true}
      bottom={true}
    >
      <h2>Ryan J Peterson</h2>
      <h4>CHICAGO IL USA</h4>
    </SectIntro>

    <SectOrange title='Front End Dev'>
      <p>A front end developer with 15+ years of experience designing, developing, and implementing web applications through logical, clean code. Provides years of expertise in responsive design and development across browsers and devices. Possesses the ability to understand client expectations and requirements while collaborating with them on a personal level. Vast experience within design realm, coupled with expertise in development creates a unique eye for continuity and best practices throughout projects. In-depth maintenance of code as well as testing thoroughly throughout. Leader among team collaborations.</p>
    </SectOrange>

    <TechSkills title='Technical Skills' />

    <ProExp title='Professional Experience' />

    <Education title='Education' />
    
    <SectPreFooter title='Featured junk'>
      <p>As this site is constantly in development, and as it is replacing an older version, eventually I'm going to get my work up. Hopefully sooner rather than later. Keep checking back though. It's bound to happen.</p>
        
      {/* <Button
        color='black'
        copy='Resume'
        href='/' /> */}
    </SectPreFooter>
  </Layout>
)

export default Resume
