import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import Button from '../components/button/button'
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SectOrange from '../components/sectOrange/sectOrange'
import SEO from '../components/seo/seo'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

// Main component
const IndexPage = ({ data }) => {

  const { pageTitle } = data.contentfulPage
  // console.log(pageTitle)
  
  return (
    <Layout>
      <SEO title='Developer, Designer, and Author' />

      <PageHeader>
        {pageTitle && renderRichText(pageTitle, options)}
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

}
export default IndexPage

// GraphQL query
export const pageQuery = graphql`
  {
    contentfulPage(contentful_id: {eq: "6t9h0XvEXg6lAInvPn0TiG"}) {
      contentful_id
      pageName
      pageTitle {
        raw
      }
    }
  }
`
