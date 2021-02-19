import React from 'react'

import styles from './pageHeader.module.less'

const PageHeader = ({ children }) => (
  <section className={styles.pageHeader}>
    <h1>{children}</h1>
  </section>
)

export default PageHeader
