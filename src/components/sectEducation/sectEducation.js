import React from 'react'
import PropTypes from 'prop-types'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import component styles
import styles from './sectEducation.module.less'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const Education = ( props ) => {

  // const education = [
  //   {
  //     institution: 'Purdue University - West Lafayette',
  //     positions: [
  //       {
  //         major: 'Computer Graphics Technology',
  //         startMonth: 'Aug',
  //         startYear: '1999',
  //         endMonth: 'May',
  //         endYear: '2004',
  //         points: [
  //           { bullet: `Bachelor of Science` },
  //           { bullet: `Interactive Multimedia and Design specialty` },
  //         ],
  //       },
  //     ],
  //   },
  // ]

  return (
    <section className={styles.education}>
      <h2>{props.title}</h2>

      <div className={styles.content}>

        {props.schooling.map(school => {
          return (
            <div
              key={school.contentful_id}
              className={styles.item}
            >
              <h3>{school.educationSchoolTitle}</h3>

              <div className={styles.position}>
                <h4>{school.subTitle}</h4>

                <div className={styles.positionContent}>
                  <div className={styles.col}>
                    <p className={styles.dates}>
                      <span className={styles.endDate}>
                        {school.endDate}
                      </span>
                      <svg
                        width="59"
                        height="59"
                        viewBox="0 0 59 59"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.0831 4.98644C7.4046 8.7969 3.12319 14.5282 1.16913 21.25L29.3175 21.25L13.0831 4.98644ZM0.897522 36.75C2.64099 43.6496 6.81538 49.5815 12.4562 53.5811L29.3175 36.75L0.897522 36.75ZM29.0041 58.9959C29.1691 58.9986 29.3344 59 29.5 59C45.7924 59 59 45.7924 59 29.5C59 29.3344 58.9987 29.1691 58.9959 29.0041L29.0041 58.9959ZM58.9958 28.9958L30.0042 0.0042194C45.8963 0.270562 58.7295 13.1037 58.9958 28.9958Z"
                          fill='rgba(255,255,255,0.65)' />
                      </svg>
                      <span className={styles.startDate}>
                        {school.startDate}
                      </span>
                    </p>
                  </div>

                  <div className={styles.col}>
                    <ul className={styles.positionPoints}>
                      
                      {school.bullets.map((bullet, i) => {
                        return (
                          <li key={i}>
                            {renderRichText(bullet.bulletPoint, options)}
                          </li>
                        )
                      })}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}

        {/* {education.map((item, i) => (
          <div
            key={i}
            className={styles.item}>

            <h3>{item.institution}</h3>

            {item.positions.map((position, i) => (
              <div
                key={i}
                className={styles.position}>

                <h4>{position.major}</h4>
                <div className={styles.positionContent}>
                  

                  <div className={styles.col}>
                    <ul className={styles.positionPoints}>
                      {position.points.map((point, i) => (
                        <li key={i}>{point.bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}

          </div>
        ))} */}

      </div>
    </section>
  )
}

Education.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Education
