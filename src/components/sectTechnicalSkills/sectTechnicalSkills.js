import React from 'react'

// Import component styles
import styles from './sectTechnicalSkills.module.less'

const TechSkills = (props) => {
  const skills = [
    { skill: 'HTML', percent: 98, },
    { skill: 'CSS', percent: 98, },
    { skill: 'WordPress', percent: 98, },
    { skill: 'PHP', percent: 95, },
    { skill: 'JavaScript', percent: 60, },
    { skill: 'jQuery', percent: 80, },
    { skill: 'LESS', percent: 95, },
    { skill: 'Umbraco', percent: 75, },
    { skill: 'C#', percent: 50, },
    { skill: 'ASP.NET', percent: 50, },
    { skill: 'Razor syntax', percent: 50, },
    { skill: 'XSLT', percent: 50, },
    { skill: 'JSON', percent: 75, },
    { skill: 'Bootstrap', percent: 85, },
    { skill: 'MySQL', percent: 75, },
    { skill: 'Drupal', percent: 65, },
    { skill: 'Git', percent: 75, },
    { skill: 'Magento', percent: 40, },
    { skill: 'X-Cart', percent: 10, },
    { skill: 'Photoshop', percent: 75, },
    { skill: 'Illustrator', percent: 65, },
    { skill: 'Joomla!', percent: 85, },
    { skill: 'Gatsby', percent: 75, },
    { skill: 'React', percent: 50, },
    { skill: 'GraphQL', percent: 50, },
    { skill: 'Contentful', percent: 50, },
    { skill: 'Figma', percent: 85, },
  ]

  skills.sort((a, b) => (a.percent < b.percent ? 1 : -1))

  console.log(skills)

  return (    
    <section className={styles.techSkills}>
      <h2>{props.title}</h2>

      <div className={styles.content}>

        {/* Loop through array */}
        {skills.map((item) => (
          <div
            key={item.skill}
            className={styles.skill}
          >
            <p>{item.skill}</p>
            <div className={styles.skillBox}>
              <div
                className={styles.skillBoxFill}
                style={{
                  width: item.percent + '%'
                }}
              >
                <p className={styles.percentCopy}>{item.percent}%</p>
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