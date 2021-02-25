import React from 'react'

// Import component styles
import styles from './sectIntro.module.less'

// Top SVG polygon
const Top = (props) => (
  <div className={`${styles.polygon} ${styles.polygonTop}`}>
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon
        points="100,100 100,0 0,100"
        opacity="1"
        fill={props.bgColor} />
    </svg>
  </div>
)

// Bottom SVG polygon
const Bottom = (props) => (
  <div className={`${styles.polygon} ${styles.polygonBottom}`}>
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <polygon
        points="100,100 100,0 0,0"
        opacity="1"
        fill={props.bgColor} />
    </svg>
  </div>
)

const SectIntro = props => {
  const bgColor = props.bgColor
  const top = props.top
  const bottom = props.bottom

  return (
    <section className={styles.intro}>

      {/* If Top SVG is true, then show */}
      {top ? <Top bgColor={bgColor} /> : ''}

      <div className={styles.content}>
        {props.children}
      </div>

      {/* If Bottom SVG is true, then show */}
      {bottom ? <Bottom bgColor={bgColor} /> : ''}
    </section>
  )
}

// Specifiy default values for props
SectIntro.defaultProps = {
  bgColor: '#ffffff',
  top: false,
  bottom: false,
}

export default SectIntro
