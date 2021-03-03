import React from 'react'

// Import component styles
import styles from './svgPolygon.module.less'

const SvgPolygon = props => {
  const position = props.position
  const height = props.height
  const absTop = props.absTop
  const absRight = props.absRight
  const absBottom = props.absBottom
  const absLeft = props.absLeft

  let pos

  if (position === 'top') {
    // pos = styles.top
    pos = 'top'
  } else {
    pos = 'bottom'
  }

  // position === 'top' ? pos = styles.top : pos = styles.bottom

  return (
    // <div className={`${styles.polygon} ${position}`}>
    // <div className={`${styles.polygon} ${pos}`}>
    <div
      className={`${styles.polygon} ${pos}`}
      style={{
        height: height,
        top: absTop,
        right: absRight,
        bottom: absBottom,
        left: absLeft,
      }}
    >
      {/* preserveAspectRatio: makes sure the triangle is scalable
      viewbox: points stretches from the parent */}
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          points="100,100 100,0 0,100"
          opacity="1" />
      </svg>
    </div>
  )
}

SvgPolygon.defaultProps = {
  position: 'top',
  absTop: 'auto',
  absRight: 'auto',
  absBottom: '50%',
  absLeft: 'auto',
}

export default SvgPolygon
