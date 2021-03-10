import React from 'react'
import PropTypes from 'prop-types'

// Import the new rendering and the render node definitions
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import component styles
import styles from './sectProExp.module.less'

// Setting the rendering options
const options = {
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const ProExp = props => (
  <section className={styles.proExp}>
    <h2>{props.title}</h2>

    <div className={styles.content}>

      {props.employment.map(employer => {
        return (
          <div
            key={employer.contentful_id}
            className={styles.item}
          >
            <h3>{employer.employerTitle}</h3>

            {employer.employerPosition.map(position => {
              return (
                <div
                  key={position.contentful_id}
                  className={styles.position}
                >
                  {position.title
                    ? <h4>{position.title}</h4>
                    : ''
                  }

                  <div className={styles.positionContent}>
                    <div className={styles.col}>
                      <p className={styles.dates}>
                        <span className={styles.endDate}>
                          {position.endDate
                            ? position.endDate
                            : 'Present'
                          }
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
                            fill='#FF5C00' />
                        </svg>
                        <span className={styles.startDate}>
                          {position.startDate}
                        </span>
                      </p>
                    </div>

                    <div className={styles.col}>
                      <ul className={styles.positionPoints}>

                        {position.bullets.map(bullet => {
                          return (
                            <li key={bullet.contentful_id}>
                              {renderRichText(bullet.bulletPoint, options)}
                            </li>
                          )
                        })}

                      </ul>

                      <p className={styles.stacksTitle}>Key Stacks</p>
                      <ul className={styles.stacks}>

                        {position.technicalSkills
                          ? position.technicalSkills.map(tech => {
                            return (
                              <li key={tech.contentful_id}>{tech.skill}</li>
                            )
                          })
                          : ''
                        }

                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}

    </div>
    
    <div className={`${styles.polygon} ${styles.polygonBottom}`}>
      <svg
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon
          points="0,100 100,0 0,0"
          opacity="1"
          fill='#ffffff' />
      </svg>
    </div>
  </section>
)

ProExp.propTypes = {
  title: PropTypes.string,
}

ProExp.defaultProps = {
  title: 'Education',
}

export default ProExp
