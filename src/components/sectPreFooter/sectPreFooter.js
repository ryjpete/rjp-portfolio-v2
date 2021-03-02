import React from 'react'

// Import component styles
import styles from './sectPreFooter.module.less'

// Import components
// import Button from '../button/button'

// Bottom SVG polygon
const Bottom = () => (
  <div className={`${styles.polygon} ${styles.polygonBottom}`}>
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon
        points="65,100 100,0 0,0"
        opacity="1" />
    </svg>
  </div>
)

const SectPreFooter = (props) => {
  return (
    <section className={styles.preFooter}>

      <div className={styles.content}>
        <div className={styles.col}>
          <h3>{props.title}</h3>
        </div>

        <div className={styles.col}>
          {props.children}
        </div>
      </div>      

      <Bottom />

    </section>
  )
}

export default SectPreFooter
