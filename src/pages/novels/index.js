import React from 'react'
import { graphql } from 'gatsby'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import Layout from '../../components/layout/layout'
import Novel from '../../components/sectNovel/sectNovel'
import PageHeader from '../../components/pageHeader/pageHeader'
import SectIntro from '../../components/sectIntro/sectIntro'
import SectOrange from '../../components/sectOrange/sectOrange'
import SEO from '../../components/seo/seo'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const Novels = ({ data }) => (
  <Layout>
    <SEO title='Writing from indie author Ryan Jennings Peterson' />

    <PageHeader
      bgcolor='#000000'
      color='#ffffff'
    >
      <h1>
        Novels from RJP
      </h1>
    </PageHeader>

    <SectIntro
      bgColor='#FFFFFF'
      color='#000000'
      top={true}
      bottom={true}
      title='Current Works'
    >
      <p>
        RJP's writing incorporates the Jolene Hartley Novels that belong to The Humanities Saga. The first three, <em>On the Ladder of Humanity</em>, <em>On the Edge of Greed</em>, and <em>On the Road through Chaos</em> were released in quick succession between 2012 and 2014. Though some years have passed, The Humanities Saga will reach its end soon.
      </p>
    </SectIntro>

    <SectOrange
      title='Future Works'
    >
      <p>
        The Humanities Saga and Jolene Hartley have been the catalysts that have driven the creative flow of indie author Ryan Jennings Peterson. While Book 3, <em>On the Road through Chaos</em> was released in 2014, the fourth and final manuscript in The Humanities Saga has been underway for nearly 6 years! Tentatively titled <em>In the Storm of the Soul</em>, the thrilling story that has tranversed Jolene's world will finally end.
        <br /><br />
        While the work has been put forth to complete The Humanities Saga, RJP decided to also take a different route with a novel titled <em>I Will Follow You Into the Dark</em>. A humorous and heartfelt love story with well-placed wit and unabashed self-deprecation, <em>I Will Follow You Into the Dark</em> weaves a hilarious and grueling story of a man floating through his own reality after the death of his soulmate.
      </p>
    </SectOrange>

    {data.allContentfulNovel.edges.map(novel => (
      <Novel
        key={novel.node.contentful_id}
        slug={novel.node.slug}
        title={novel.node.title}
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

export default Novels

export const pageQuery = graphql`
  {
    allContentfulNovel(sort: {fields: bookNumber}) {
      edges {
        node {
          contentful_id
          slug
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
        }
      }
    }
  }
`
