import React from 'react'

import styles from './footer.module.less'
import Logo from '../logo/logo'

// Image Imports
import imgFigma from '../../images/logoFigma.png'
import imgGatsby from '../../images/logoGatsby.png'
import imgContentful from '../../images/logoContentful.png'
import imgLinkedIn from '../../images/linkedin.png'
import imgGitHub from '../../images/github.png'
import imgCodecademy from '../../images/codecademy.png'

const Images = (
  <span className={styles.logos}>
    <a
      href='https://www.figma.com/'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={imgFigma}
        alt='Figma'
        height='27'
        width='18' />
    </a>
    <a
      href='https://www.gatsbyjs.com/'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={imgGatsby}
        alt='Gatsby'
        height='27'
        width='27' />
    </a>
    <a
      href='https://www.contentful.com/'
      target='_blank'
      rel='noreferrer'
    >
      <img
        src={imgContentful}
        alt='Contentful'
        height='27'
        width='24' />
    </a>
  </span>
)

const SocialImages = (
  <div className={styles.socialImages}>
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

const Footer = () => (
  <footer className={styles.footer}>
    
    <div className={`${styles.half} ${styles.copy}`}>
      
      <Logo color='#AFC7D4' />

      <div className={styles.copyright}>
        <svg
          width="29"
          height="29"
          viewBox="0 0 29 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.18 13.1225C12.2404 12.7237 12.3733 12.3733 12.5425 12.0712C12.7117 11.7691 12.9533 11.5154 13.2554 11.322C13.5454 11.1408 13.9079 11.0562 14.355 11.0441C14.6329 11.0562 14.8867 11.1045 15.1162 11.2012C15.3579 11.31 15.5754 11.455 15.7446 11.6362C15.9137 11.8175 16.0467 12.035 16.1554 12.2766C16.2642 12.5183 16.3125 12.7841 16.3246 13.05H18.4875C18.4633 12.482 18.3546 11.9625 18.1492 11.4912C17.9437 11.02 17.6658 10.6091 17.3033 10.2708C16.9408 9.93246 16.5058 9.66663 15.9983 9.47329C15.4908 9.27996 14.935 9.19538 14.3187 9.19538C13.5333 9.19538 12.8446 9.32829 12.2646 9.60621C11.6846 9.88413 11.2012 10.2466 10.8146 10.7179C10.4279 11.1891 10.1379 11.7329 9.95666 12.3612C9.77541 12.9895 9.66666 13.642 9.66666 14.3429V14.6691C9.66666 15.37 9.76332 16.0225 9.94457 16.6508C10.1258 17.2791 10.4158 17.8229 10.8025 18.282C11.1892 18.7412 11.6725 19.1158 12.2525 19.3816C12.8325 19.6475 13.5212 19.7925 14.3067 19.7925C14.8746 19.7925 15.4062 19.6958 15.9017 19.5145C16.3971 19.3333 16.8321 19.0795 17.2067 18.7533C17.5812 18.427 17.8833 18.0525 18.1008 17.6175C18.3183 17.1825 18.4512 16.7233 18.4633 16.2279H16.3004C16.2883 16.4816 16.2279 16.7112 16.1192 16.9287C16.0104 17.1462 15.8654 17.3275 15.6842 17.4845C15.5029 17.6416 15.2975 17.7625 15.0558 17.847C14.8262 17.9316 14.5846 17.9558 14.3308 17.9679C13.8958 17.9558 13.5333 17.8712 13.2554 17.69C12.9533 17.4966 12.7117 17.2429 12.5425 16.9408C12.3733 16.6387 12.2404 16.2762 12.18 15.8775C12.1196 15.4787 12.0833 15.0679 12.0833 14.6691V14.3429C12.0833 13.92 12.1196 13.5212 12.18 13.1225ZM14.5 2.41663C7.82999 2.41663 2.41666 7.82996 2.41666 14.5C2.41666 21.17 7.82999 26.5833 14.5 26.5833C21.17 26.5833 26.5833 21.17 26.5833 14.5C26.5833 7.82996 21.17 2.41663 14.5 2.41663ZM14.5 24.1666C9.17124 24.1666 4.83332 19.8287 4.83332 14.5C4.83332 9.17121 9.17124 4.83329 14.5 4.83329C19.8287 4.83329 24.1667 9.17121 24.1667 14.5C24.1667 19.8287 19.8287 24.1666 14.5 24.1666Z"
            fill="#AFC7D4" />
        </svg>
        <p>
          {new Date().getFullYear()} RJP
          <br />
          This mess of a site designed and developed by me using {Images}
        </p>
      </div>

    </div>

    <div className={`${styles.half} ${styles.social}`}>
      {SocialImages}
    </div>
  </footer>
)

export default Footer
 