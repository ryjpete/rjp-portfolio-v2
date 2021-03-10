import React from 'react'

// Import component styles
import styles from './sectTechnicalSkills.module.less'

const TechSkills = props => {
  props.skills.sort((a, b) => (a.skillLevel > b.skillLevel) ? -1 : 1)

  return (    
    <section className={styles.techSkills}>
      <h2>{props.title}</h2>

      <div className={styles.content}>
        
        {/* Loop through array */}
        {props.skills.map((item, i) => (
          <div
            key={i}
            className={styles.skill}
          >
            <p>{item.skill}</p>

            <div className={styles.skillBox}>
              <div
                className={styles.skillBoxFill}
                style={{
                  width: item.skillLevel + '%'
                }}
              >
                <p className={styles.percentCopy}>{item.skillLevel}%</p>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className={`${styles.polygon} ${styles.polygonBottom}`}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon
            points="100,100 100,0 60,0"
            opacity="1" />
        </svg>
      </div>
    </section>
  )
}
export default TechSkills
