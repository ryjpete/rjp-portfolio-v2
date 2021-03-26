import React from 'react'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import Button from '../components/button/button'
import Education from '../components/sectEducation/sectEducation'
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import ProExp from '../components/sectProExp/sectProExp'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SEO from '../components/seo/seo'
import TechSkills from '../components/sectTechnicalSkills/sectTechnicalSkills'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

// Main component
const About = ({ data }) => (
  <Layout>
    <SEO title='Ryan J Peterson' />

    <PageHeader>
      {data.contentfulPage.pageTitle && renderRichText(data.contentfulPage.pageTitle, options)}
    </PageHeader>

    {data.contentfulPage.pageReferences.map(section => {
      let sectResume

      switch (section.__typename) {
        case 'ContentfulSectionIntro':
          sectResume = (
            <SectIntro
              key={section.contentful_id}
              bgColor='#000000'
              color='#FFFFFF'
              top={true}
              bottom={true}
              title={section.introSectionShowTitle ? section.introSectionTitle : ''}
            >
              {renderRichText(section.introSectionContent, options)}
            </SectIntro>
          )
          break

        case 'ContentfulSectionOrange':
          sectResume = (
            <SectOrange
              key={section.contentful_id}
              title={section.orangeSectionShowTitle ? section.orangeSectionTitle : ''}
            >
              {renderRichText(section.orangeSectionContent, options)}

              <Button
                color='white'
                copy='Learn more'
                href='/about' />
            </SectOrange>
          )
          break

        case 'ContentfulSectionTechnicalSkills':
          sectResume = (
            <TechSkills
              key={section.contentful_id}
              title={section.technicalSkillsSectionTitle}
              skills={section.skills} />
          )
          break

        case 'ContentfulSectionProfessionalExperience':
          sectResume = (
            <ProExp
              key={section.contentful_id}
              title={section.professionalExperienceSectionTitle}
              employment={section.employment} />
          )
          break

        case 'ContentfulSectionEducationalExperience':
          sectResume = (
            <Education
              key={section.contentful_id}
              title={section.educationalExperienceSectionTitle}
              schooling={section.schooling} />
          )
          break

        case 'ContentfulSectionPreFooter':
          sectResume = (
            <SectPreFooter
              key={section.contentful_id}
              title={section.preFooterSectionShowTitle ? section.preFooterSectionTitle : ''}
            >
              {renderRichText(section.preFooterSectionContent, options)}
          
              <Button
                color='black'
                copy='Resume'
                href='/resume' />
            </SectPreFooter>
          )
          break

        default:
          return false
      }

      return sectResume
      
    })}
  </Layout>
)

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
      pageReferences {
        ... on ContentfulSectionIntro {
          contentful_id
          introSectionShowTitle
          introSectionTitle
          introSectionContent {
            raw
          }
        }
        ... on ContentfulSectionOrange {
          contentful_id
          orangeSectionShowTitle
          orangeSectionTitle
          orangeSectionContent {
            raw
          }
        }
        ... on ContentfulSectionPreFooter {
          contentful_id
          preFooterSectionShowTitle
          preFooterSectionTitle
          preFooterSectionContent {
            raw
          }
        }
      }
    }
  }
`
