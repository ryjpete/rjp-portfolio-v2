import React from 'react'

// Import component styles
import styles from './sectNovel.module.less'

const Novel = ( props ) => {
  const title = props.title.split(' ')
  const saga = props.package1.split(' ')

  return (
    <section
      className={`${styles.novel} ${styles[props.mode]}`}
      style={{ backgroundColor: '#' + props.mainColor }}
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
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
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

        <figure style={{ margin: 0, }}>
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
              xlinkHref={props.gridImage}
              clipPath='url(#user-space)' />
          </svg>
        </figure>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.left}>
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
        </div>
        <div className={styles.right}>
          {props.tease}
        </div>
      </div>
    </section>
  )
}

export default Novel
