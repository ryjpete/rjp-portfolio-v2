import React from 'react'
// import { GatsbyImage } from 'gatsby-plugin-image'

// Import component styles
import styles from './sectNovel.module.less'

// Import components
import Button from '../button/button'

// Import Images
import imgGridYellow from '../../images/gridYellow.jpg'
import imgGridGreen from '../../images/gridGreen.jpg'
import imgGridRed from '../../images/gridRed.jpg'

const hexToRgb = ( hex ) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

const setTextColor = ( hexColor ) => {
  const textColor = hexToRgb(hexColor)
  // console.log(textColor)
  const yiq = ((textColor.r * 299) + (textColor.g * 587) + (textColor.b + 114)) / 1000
  
  return (yiq >= 128) ? '#000000' : '#ffffff'
}

const Novel = ( props ) => {
  const title = props.title.split(' ')
  const saga = props.package1.split(' ')
  const addClass = props.title.match(/\b(\w)/g).join('').toLowerCase()
  // const href = props.title.toLowerCase().replaceAll(' ', '-')
  let gridImage

  switch (title[4]) {
    case 'Humanity':
      gridImage = imgGridYellow
      // gridImage = 'gridYellow'
      // import gridImage from '../../images/gridYellow.jpg'
      break
    case 'Greed':
      gridImage = imgGridGreen
      // gridImage = 'gridGreen'
      // import gridImage from '../../images/gridGreen.jpg'
      break
    case 'Chaos':
      gridImage = imgGridRed
      // gridImage = 'gridRed'
      // import gridImage from '../../images/gridRed.jpg'
      break
    default:
      return false
  }

  return (
    <section
      className={`${styles.novel} ${styles[addClass]}`}
      style={{
        backgroundColor: '#' + props.mainColor,
        color: setTextColor('#' + props.mainColor),
      }}
    >
      {/* Title */}
      <div className={styles.title}>
        <h2 style={{ color: props.textColor, }}>
          <span
            className={`${styles.sub} ${styles.one}`}
            style={{ color: '#' + props.subColor1, }}
          >
            {title[0]}
          </span>
          <span
            className={`${styles.sub} ${styles.two}`}
            style={{ color: '#' + props.subColor2, }}
          >
            {title[1]}
          </span>
          <span
            className={`${styles.main} ${styles.one}`}
            style={{ color: '#' + props.titleColor1, }}
          >
            {title[2]}
          </span>
          <span
            className={`${styles.sub} ${styles.three}`}
            style={{ color: '#' + props.subColor3, }}
          >
            {title[3]}
          </span>
          <span
            className={`${styles.main} ${styles.two}`}
            style={{ color: '#' + props.mainColor, }}
          >
            {title[4]}
          </span>
        </h2>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          viewBox='0 0 100 100'
        >
          <defs>
            <clipPath
              id='blackBox'
              clipPathUnits='userSpaceOnUse'
            >
              <polygon
                points='0,0 100,0 47,100 0,60'
                opacity='1' />
            </clipPath>
          </defs>
        
          <polygon
            points='20,0 70,0 70,100 20,100'
            opacity='1'
            clipPath="url(#blackBox)" />
        </svg>

        <figure>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            viewBox='0 0 100 100'
          >
            <defs>
              <clipPath
                id='user-space'
                clipPathUnits='userSpaceOnUse'
              >
                <polygon
                  points='0,0 100,0 47,100 0 60'
                  opacity='1' />
              </clipPath>
            </defs>

            <image
              width='100%'
              height='100%'
              preserveAspectRatio='xMinYMin slice'
              xlinkHref={gridImage}
              clipPath='url(#user-space)' />
          </svg>
        </figure>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.package}>
          <p>
            {saga[0]}<br />
            {saga[1]}<br />
            {saga[2]}<br />
            <span className={styles.emp}>
              {props.package1Num}
            </span>
          </p>
        </div>
        <div className={styles.package}>
          {props.package2}
        </div>

        {props.tease}

        <Button
          color={setTextColor('#' + props.mainColor)}
          copy='Read more'
          href={`/novels/${props.slug}`} />
      </div>
    </section>
  )
}

export default Novel
