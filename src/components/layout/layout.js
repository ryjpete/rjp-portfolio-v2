import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// Import component styles
import styles from './layout.module.less'

// Import components
import Header from '../header/header'
import Footer from '../footer/footer'
import Menu from '../menu/menu'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteTitleQueryAndSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [state, setState] = useState({
    visible: false,
  })

  const handleMenuClick = () => {
    console.log('handleMenuClick')

    setState({
      ...state,
      visible: !state.visible,
    })
  }
  
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        visible={state.visible}
        menuTriggerClick={handleMenuClick} />

      <main className={`${styles.main}`}>
        {children}
      </main>

      <Footer />

      <Menu
        visible={state.visible} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout