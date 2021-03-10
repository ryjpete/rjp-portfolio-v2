import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './sectOrange.module.less'

const SectOrange = props => (
  <section className={styles.orange}>
    <h2>{props.title}</h2>

    <div className={styles.content}>
      {props.children}
    </div>
  </section>
)

SectOrange.propTypes = {
  title: PropTypes.string,
}

export default SectOrange
