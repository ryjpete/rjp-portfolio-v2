import React from 'react'

// Import component styles
import styles from './socialIcons.module.less'

// Import Images
import imgCodecademy from '../../images/codecademy.png'
import imgGitHub from '../../images/github.png'
import imgLinkedIn from '../../images/linkedin.png'

const SocialIcons = ( props ) => (
  <div className={`${styles.socialImages} ${props.addClass ? styles[props.addClass] : ''}`}>
    <a
      href='https://www.linkedin.com/in/ryanjenningspeterson/'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={imgLinkedIn}
        alt='LinkedIn'
        height='40'
        width='40' />
    </a>
    <a
      href='https://github.com/ryjpete'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={imgGitHub}
        alt='GitHub'
        height='40'
        width='40' />
    </a>
    <a
      href='https://www.codecademy.com/profiles/ryanjpeterson'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={imgCodecademy}
        alt='Codecademy'
        height='40'
        width='40' />
    </a>
  </div>
)

export default SocialIcons
