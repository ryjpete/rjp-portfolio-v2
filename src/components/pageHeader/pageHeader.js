import React from 'react'
import PropTypes from 'prop-types'

import styles from './pageHeader.module.less'

const PageHeader = ({ children }) => (
  <section className={styles.pageHeader}>
    <h1>{children}</h1>
  </section>
)

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader
