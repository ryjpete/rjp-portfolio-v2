import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './pageHeader.module.less'

const PageHeader = ( props ) => (
  <section
    className={`${styles.pageHeader} ${props.addClass ? styles[props.addClass] : ''}`}
    style={{
      backgroundColor: props.bgcolor,
      color: props.color,
    }}
  >
    {props.children}
  </section>
)

PageHeader.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageHeader
