import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './sectIntro.module.less'

// Top SVG polygon
const Top = props => (
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
const Bottom = props => (
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

const SectIntro = props => (
  <section className={styles.intro}>

    {/* If Top SVG is true, then show */}
    {props.top
      ? <Top bgColor={props.bgColor} />
      : ''
    }

    <div
      className={styles.content}
      style={{
        color: props.color,
      }}
    >
      {props.title
        ? <h2>{props.title}</h2>
        : ''
      }
      {props.children}
    </div>

    {/* If Bottom SVG is true, then show */}
    {props.bottom
      ? <Bottom bgColor={props.bgColor} />
      : ''
    }
  </section>
)

SectIntro.propTypes = {
  bgColor: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
}

// Specifiy default values for props
SectIntro.defaultProps = {
  bgColor: '#ffffff',
  top: false,
  bottom: false,
}

export default SectIntro
