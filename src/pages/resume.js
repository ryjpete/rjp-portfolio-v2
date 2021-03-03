import React from 'react'

// Import components
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import TechSkills from '../components/sectTechnicalSkills/sectTechnicalSkills'
import ProExp from '../components/sectProExp/sectProExp'
import Education from '../components/sectEducation/sectEducation'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import Button from '../components/button/button'

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
    
    <SectPreFooter title='Professional and Bullet-Pointed'>
      <p>I get it. No one really wants to read everything I have to say. I don't agree with it, but I understand. So, for those that don't care about anything other than my professional life in bullet points, click the button and head to my online resume. Short and sweet.</p>
        
      <Button
        color='black'
        copy='Resume'
        href='resume' />
    </SectPreFooter>
  </Layout>
)

export default Resume
