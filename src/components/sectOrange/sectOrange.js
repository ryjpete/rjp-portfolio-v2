import React from 'react'

// Import component styles
import styles from './sectOrange.module.less'

const SectOrange = ( props ) => {
  return (
    <section className={styles.orange}>
      <h2>{props.title}</h2>

      <div className={styles.content}>
        {props.children}
      </div>
    </section>
  )
}

export default SectOrange
