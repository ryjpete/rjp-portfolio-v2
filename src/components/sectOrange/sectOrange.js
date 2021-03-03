import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './sectOrange.module.less'

const SectOrange = ( props ) => {
  let title = props.title
  let children = props.children

  return (
    <section className={styles.orange}>
      <h2>{title}</h2>

      <div className={styles.content}>
        {children}
      </div>
    </section>
  )
}

SectOrange.propTypes = {
  title: PropTypes.string,
}

export default SectOrange
