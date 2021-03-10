import React from 'react'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import Button from '../components/button/button'
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SEO from '../components/seo/seo'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const About = ({ data }) => {

  const { pageTitle } = data.contentfulPage
  const { introSectionContent } = data.contentfulSectionIntro
  const introSectionShowTitle = data.contentfulSectionIntro.introSectionShowTitle
  const introSectionTitle = data.contentfulSectionIntro.introSectionTitle
  const { orangeSectionContent } = data.contentfulSectionOrange
  const orangeSectionTitle = data.contentfulSectionOrange.orangeSectionTitle
  const orangeSectionShowTitle = data.contentfulSectionOrange.orangeSectionShowTitle
  const { preFooterSectionContent } = data.contentfulSectionPreFooter
  const preFooterSectionTitle = data.contentfulSectionPreFooter.preFooterSectionTitle
  const preFooterSectionShowTitle = data.contentfulSectionPreFooter.preFooterSectionShowTitle

  return (
    <Layout>
      <SEO title='Ryan J Peterson' />

      <PageHeader>
        {pageTitle && renderRichText(pageTitle, options)}
      </PageHeader>

      {introSectionContent ?
        <SectIntro
          bgColor='#000000'
          top={true}
          bottom={true}
          title={introSectionShowTitle ? introSectionTitle : ''}
        >
          {renderRichText(introSectionContent, options)}
        </SectIntro>
      : ''}
      
      {orangeSectionContent ?
        <SectOrange title={orangeSectionShowTitle ? orangeSectionTitle : ''}>
          {renderRichText(orangeSectionContent, options)}
        </SectOrange>
      : ''}
      
      {preFooterSectionContent ?
        <SectPreFooter title={preFooterSectionShowTitle ? preFooterSectionTitle : ''}>
          {renderRichText(preFooterSectionContent, options)}
            
          <Button
            color='black'
            copy='Resume'
            href='/resume' />
        </SectPreFooter>
      : ''}

    </Layout>
  )
}
export default About

// GraphQL query
export const pageQuery = graphql`
  {
    contentfulPage(contentful_id: {eq: "1Wr7aJTiHAwpAQnupeDcMG"}) {
      contentful_id
      pageName
      pageTitle {
        raw
      }
    }
    contentfulSectionIntro(page: {elemMatch: {contentful_id: {eq: "1Wr7aJTiHAwpAQnupeDcMG"}}}) {
      id
      introSectionShowTitle
      introSectionTitle
      introSectionContent {
        raw
      }
    }
    contentfulSectionOrange(page: {elemMatch: {contentful_id: {eq: "1Wr7aJTiHAwpAQnupeDcMG"}}}) {
      id
      orangeSectionTitle
      orangeSectionShowTitle
      orangeSectionContent {
        raw
      }
    }
    contentfulSectionPreFooter(page: {elemMatch: {contentful_id: {eq: "1Wr7aJTiHAwpAQnupeDcMG"}}}) {
      preFooterSectionTitle
      preFooterSectionShowTitle
      preFooterSectionContent {
        raw
      }
    }
  }
`
