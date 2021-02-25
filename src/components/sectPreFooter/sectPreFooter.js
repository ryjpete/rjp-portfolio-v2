import React from 'react'

// Import component styles
import styles from './sectPreFooter.module.less'

// Import components
import Button from '../button/button'


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

const SectPreFooter = () => {
  return (
    <section className={styles.preFooter}>

      <div className={styles.content}>
        <h3>H3 Header goes here blah</h3>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
      
      <Button />

      <Bottom />

    </section>
  )
}

export default SectPreFooter
