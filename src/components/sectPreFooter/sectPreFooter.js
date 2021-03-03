import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './sectPreFooter.module.less'

// Bottom SVG polygon
const Bottom = ( props ) => {
  let points = props.points

  return (
    <div className={`${styles.polygon} ${styles.polygonBottom}`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          points={points}
          opacity="1" />
      </svg>
    </div>
  )
}

Bottom.propTypes = {
  points: PropTypes.string.isRequired,
}

const SectPreFooter = ( props ) => {
  let title = props.title
  let children = props.children

  return (
    <section className={styles.preFooter}>

      <div className={styles.content}>
        <div className={styles.col}>
          <h3>{title}</h3>
        </div>

        <div className={styles.col}>
          {children}
        </div>
      </div>      

      <Bottom points='65,100 100,0 0,0' />

    </section>
  )
}

SectPreFooter.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
}

export default SectPreFooter
