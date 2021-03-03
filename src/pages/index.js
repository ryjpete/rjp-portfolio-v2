import React from 'react'

// Import components
import Button from '../components/button/button'
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SectOrange from '../components/sectOrange/sectOrange'
import SEO from '../components/seo/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Developer, Designer, and Author' />

    <PageHeader>
      Hey.<br/>
      I'm Ryan.<br />
      I create things.
    </PageHeader>

    <SectIntro
      bgColor='#000000'
      top={true}
      bottom={true}
    >
      <p>I'm a creative person. Always have been. Drawing, writing, building, strumming, designing, developing... It's all driven by creativity.</p>
    </SectIntro>

    
    <SectOrange title='Always Evolving'>
      <p>
        A new dish to taste. As of yet unseen sights to gaze upon. State-of-the-art technologies to study and test out.
        <br /><br />
        Things are always changing, and as an inquisitive human being, I enjoy the journey of trying new things and evolving into an upgraded version of myself.
        <br /><br />
        It's all about that next adventure.
      </p>

      <Button
        color='white'
        copy='Learn more'
        href='/about' />
    </SectOrange>

    <SectPreFooter title='Professional and Bullet-Pointed'>
      <p>I get it. No one really wants to read everything I have to say. I don't agree with it, but I understand. So, for those that don't care about anything other than my professional life in bullet points, click the button and head to my online resume. Short and sweet.</p>
        
      <Button
        color='black'
        copy='Resume'
        href='/resume' />
    </SectPreFooter>
  </Layout>
)

export default IndexPage
