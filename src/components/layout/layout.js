import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import styles from './layout.module.less'
import Header from '../header/header'
import Footer from '../footer/footer'

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
  
  return (
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

    <main className={styles.main}>
      main
    </main>
    
    {/* <div>
      <main>{children}</main>
      
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>

    </div> */}

    <Footer />
  </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout