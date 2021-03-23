import React from 'react'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import Novel from '../components/sectNovel/sectNovel'
import SEO from '../components/seo/seo'

// Import Images
import imgGridYellow from '../images/gridYellow.jpg'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const Author = ({ data }) => (
  <Layout>
    <SEO title='Home of the Humanities Saga' />

    <PageHeader
      addClass='author'
      bgcolor='#202020'
    >
      <h1 style={{
        color: '#ffffff',
        marginBottom: '7rem',
      }}>
        The official site of author<br />
        Ryan Jennings Peterson.
      </h1>
      <p style={{
        color: '#ffffff',
        marginLeft: '30rem',
      }}>
        Welcome to the official website of indie author Ryan Jennings Peterson, creator of Jolene Hartley and the thrilling Humanities Saga. The action-packed novels, which debuted with On the Ladder of Humanity and was followed closely by On the Edge of Greed, charges on with book three, On the Road Through Chaos, an intense continuation into the turbulent force that is Jolene Hartley.
      </p>
    </PageHeader>

    {data.allContentfulNovel.edges.map(novel => {
      // if ( novel.node.gridImage ) {
      //   novel.node.gridImage.gatsbyImageData.images.sources.map(img => {
      //     return (
      //       <p>{img.srcSet}</p>
      //     )
      //   }
      // }

      return (
        <Novel
          key={novel.node.contentful_id}
          title={novel.node.title}
          package1={novel.node.seriesTitle1}
          package1Num={novel.node.bookNumber}
          package2={renderRichText(novel.node.seriesTitle2, options)}
          mode='dark'
          mainColor={novel.node.mainColor}// used for bgColor
          textColor={novel.node.textColor}// used for non-title font color
          subColor1={novel.node.subColor1}// used for title sub1
          subColor2={novel.node.subColor2}// used for title sub2
          subColor3={novel.node.subColor3}// used for title sub3
          titleColor1={novel.node.titleColor1}// used for title main1
          tease={renderRichText(novel.node.tease, options)} />
          // gridImage={novel.node.gridImage.gatsbyImageData.images.sources[0].srcSet} />
      )
    })}
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
          gridImage {
            contentful_id
            title
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
