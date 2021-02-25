import React from 'react'

// Import components
import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SectOrange from '../components/sectOrange/sectOrange'
import Button from '../components/button/button'

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
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.</p>
    </SectIntro>

    
    <SectOrange title='H2 Header'>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>

      <Button
        color='white'
        copy="Let's go!" />
    </SectOrange>

    <SectPreFooter />
  </Layout>
)

export default IndexPage
