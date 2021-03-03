import React from 'react'

// Import components
import Button from '../components/button/button'
import Layout from '../components/layout/layout'
import PageHeader from '../components/pageHeader/pageHeader'
import SectIntro from '../components/sectIntro/sectIntro'
import SectOrange from '../components/sectOrange/sectOrange'
import SectPreFooter from '../components/sectPreFooter/sectPreFooter'
import SEO from '../components/seo/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />

    <PageHeader>
      Well, shit.<br />
      That's not on this site.
    </PageHeader>

    <SectIntro
      bgColor='#000000'
      top={true}
      bottom={true}
    >
      <p>Terrible things have happened. Not sure who's to blame. Me for not having that page? Or you for possibly typing something non-sensical? We'll never know.</p>
    </SectIntro>

    <SectOrange title='Where do we go from here?' >
      <p>
        It's hard to tell. I feel like we've both done things wrong. We've said things in the heat of the moment. You swore. Repeatedly. It's okay. It's okay. We'll get over this.
        <br /><br />
        As I can't read your mind, nor have I put a search form in place yet, maybe we can work together. Yeah? Ok.
        <br /><br />
        What I need you to do is click the hamburger menu icon and then pick a page. That's it. That's all I can do for you. It's really up to you. Safe travels.
      </p>
    </SectOrange>
    
    <SectPreFooter title='Still here?'>
      <p>Maybe this <em>is</em> the page you were looking for! That's odd, but hey, who am I to judge what you read. Or maybe you don't quite get what to do. Could that be it? Well, let's make it easier. Click the button and go home. Well, <em>home</em> as in the homepage of this site. Or home home.</p>
        
      <Button
        color='black'
        copy='To site home'
        href='' />
    </SectPreFooter>
  </Layout>
)

export default NotFoundPage
