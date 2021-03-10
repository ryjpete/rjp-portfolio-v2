import React from 'react'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
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

const Resume = ({ data }) => (
  <Layout>
    <SEO title='Ryan J Peterson, Front End Developer' />

    <PageHeader>
      {data.contentfulPage.pageTitle && renderRichText(data.contentfulPage.pageTitle, options)}
    </PageHeader>

    {data.contentfulPage.pageReferences.map(section => {

      switch (section.__typename) {
        case 'ContentfulSectionIntro':
          return (
            <SectIntro
              key={section.contentful_id}
              bgColor='#000000'
              top={true}
              bottom={true}
              title={section.introSectionShowTitle ? section.introSectionTitle : ''}
            >
              {renderRichText(section.introSectionContent, options)}
            </SectIntro>
          )
          break

        case 'ContentfulSectionOrange':
          return (
            <SectOrange
              key={section.contentful_id}
              title={section.orangeSectionShowTitle ? section.orangeSectionTitle : ''}
            >
              {renderRichText(section.orangeSectionContent, options)}
            </SectOrange>
          )
          break
        
        case 'ContentfulSectionTechnicalSkills':
          return (
            <TechSkills
              key={section.contentful_id}
              title={section.technicalSkillsSectionTitle}
              skills={section.skills} />
          )
          break

        case 'ContentfulSectionProfessionalExperience':
          return (
            <ProExp
              key={section.contentful_id}
              title={section.professionalExperienceSectionTitle}
              employment={section.employment} />
          )
          break

        case 'ContentfulSectionEducationalExperience':
          return(
            <Education
              key={section.contentful_id}
              title={section.educationalExperienceSectionTitle}
              schooling={section.schooling} />
          )
          break

        case 'ContentfulSectionPreFooter':
          return (
            <SectPreFooter
              key={section.contentful_id}
              title={section.preFooterSectionShowTitle ? section.preFooterSectionTitle : ''}
            >
              {renderRichText(section.preFooterSectionContent, options)}
            </SectPreFooter>
          )
          break
      }
      
    })}
  </Layout>
)
export default Resume

// GraphQL query
export const pageQuery = graphql`
  {
    contentfulPage(contentful_id: {eq: "5ISg1w0IujZJZeQvfFfS51"}) {
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
        ... on ContentfulSectionTechnicalSkills {
          contentful_id
          technicalSkillsSectionTitle
          skills {
            contentful_id
            skill
            skillLevel
          }
        }
        ... on ContentfulSectionProfessionalExperience {
          contentful_id
          professionalExperienceSectionTitle
          employment {
            contentful_id
            employerTitle
            employerPosition {
              contentful_id
              endDate(formatString: "YYYY MMM")
              startDate(formatString: "YYYY MMM")
              title
              bullets {
                ... on ContentfulPositionBullet {
                  contentful_id
                  bulletPoint {
                    raw
                  }
                }
              }
              technicalSkills {
                contentful_id
                skill
              }
            }
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
        ... on ContentfulSectionEducationalExperience {
          contentful_id
          educationalExperienceSectionTitle
          schooling {
            contentful_id
            educationSchoolTitle
            subTitle
            endDate(formatString: "YYYY MMM")
            startDate(formatString: "YYYY MMM")
            bullets {
              bulletPoint {
                raw
              }
            }
          }
        }
      }
    }
  }
`
