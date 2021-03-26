import React from 'react'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import Novel from '../components/sectNovel/sectNovel'
import SEO from '../components/seo/seo'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const Author = ({ data }) => (
  <Layout>
    <SEO title='Home of the Humanities Saga' />

    <PageHeader
      addClass='fH'
      bgcolor='#000000'
      color='#FFFFFF'
    >
      {data.contentfulPage.pageTitle && renderRichText(data.contentfulPage.pageTitle, options)}
    </PageHeader>

    {data.allContentfulNovel.edges.map(novel => (
      <Novel
        key={novel.node.contentful_id}
        title={novel.node.title}
        slug={novel.node.slug}
        package1={novel.node.seriesTitle1}
        package1Num={novel.node.bookNumber}
        package2={renderRichText(novel.node.seriesTitle2, options)}
        mainColor={novel.node.mainColor}// used for bgColor
        textColor={novel.node.textColor}// used for non-title font color
        subColor1={novel.node.subColor1}// used for title sub1
        subColor2={novel.node.subColor2}// used for title sub2
        subColor3={novel.node.subColor3}// used for title sub3
        titleColor1={novel.node.titleColor1}// used for title main1
        tease={renderRichText(novel.node.tease, options)} />
    ))}
  </Layout>
)

export default Author

export const pageQuery = graphql`
  {
    allContentfulNovel(sort: {fields: bookNumber}) {
      edges {
        node {
          contentful_id
          title
          seriesTitle1
          bookNumber
          seriesTitle2 {
            raw
          }
          mainColor
          textColor
          subColor1
          subColor2
          subColor3
          titleColor1
          tease {
            raw
          }
          slug
        }
      }
    }
    contentfulPage(contentful_id: {eq: "5jqp6cNBeRptjYLkR8UIaH"}) {
      pageName
      pageSlug
      pageTitle {
        raw
      }
    }
  }
`
