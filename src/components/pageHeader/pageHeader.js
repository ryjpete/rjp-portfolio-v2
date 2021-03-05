import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './pageHeader.module.less'

const PageHeader = ({ children }) => (
  <section className={styles.pageHeader}>
    {children}
  </section>
)

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader
