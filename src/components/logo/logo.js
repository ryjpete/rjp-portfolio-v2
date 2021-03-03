import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Import component styles
import styles from './logo.module.less'

const Logo = ( props ) => {
  let color = props.color

  return (
    <Link
      className={styles.logo}
      to='/'
    >
      <svg
        className={styles.logoRjp}
        width="49"
        height="26"
        viewBox="0 0 49 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0310095 4.4958H4.23101V6.4398C4.43901 5.7518 4.79901 5.2238 5.31101 4.8558C5.83901 4.4718 6.48701 4.2798 7.25501 4.2798V7.7838C6.66301 7.7838 6.00701 7.8718 5.28701 8.0478C4.58301 8.2078 4.23101 8.3998 4.23101 8.6238V22.0638H0.0310095V4.4958ZM20.602 3.3198V0.391796H24.802V3.3198H20.602ZM21.49 24.1278C20.578 24.1278 19.986 24.0238 19.714 23.8158V21.0078C19.794 21.0398 19.922 21.0558 20.098 21.0558C20.306 21.0558 20.442 20.9918 20.506 20.8638C20.57 20.7198 20.602 20.5118 20.602 20.2398V4.4958H24.802V20.1198C24.802 21.4158 24.538 22.4078 24.01 23.0958C23.482 23.7838 22.642 24.1278 21.49 24.1278ZM38.3157 4.4958H42.5877V5.4318C43.1957 4.6798 44.0357 4.3038 45.1077 4.3038C46.4677 4.3038 47.4117 4.7598 47.9397 5.6718C48.4837 6.5838 48.7557 7.8478 48.7557 9.4638V15.9678C48.7557 17.3438 48.6757 18.4718 48.5157 19.3518C48.3557 20.2158 48.0037 20.9198 47.4597 21.4638C46.9157 21.9918 46.0917 22.2558 44.9877 22.2558C43.9317 22.2558 43.1317 21.9598 42.5877 21.3678V25.5678H38.3157V4.4958ZM43.5957 18.9918C43.9797 18.9918 44.2277 18.8158 44.3397 18.4638C44.4517 18.1118 44.5077 17.5998 44.5077 16.9278V9.4638C44.5077 8.8558 44.4517 8.3918 44.3397 8.0718C44.2277 7.7518 43.9717 7.5918 43.5717 7.5918C42.9157 7.5918 42.5877 8.1998 42.5877 9.4158V17.1198C42.5877 17.7118 42.6517 18.1758 42.7797 18.5118C42.9237 18.8318 43.1957 18.9918 43.5957 18.9918Z"
          fill={color} />
      </svg>

      <svg
        className={`${styles.star} ${styles.star1}`}
        width="79"
        height="84"
        viewBox="0 0 79 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6548 11.6533C19.7149 10.6476 22.5363 9.00609 24.9209 6.84012C33.284 -0.756176 46.0494 -0.756178 54.4125 6.84011C56.7971 9.00609 59.6185 10.6476 62.6786 11.6533C73.3835 15.1713 79.731 26.3674 77.4135 37.4031C76.7482 40.571 76.7482 43.9277 77.4135 47.0956C79.731 58.1313 73.3835 69.3275 62.6786 72.8455C59.6185 73.8511 56.7971 75.4926 54.4125 77.6586C46.0494 85.2549 33.284 85.2549 24.9209 77.6586C22.5363 75.4926 19.7149 73.8511 16.6548 72.8455C5.94985 69.3275 -0.397622 58.1313 1.91989 47.0956C2.58514 43.9277 2.58514 40.571 1.91989 37.4031C-0.397622 26.3674 5.94985 15.1713 16.6548 11.6533Z"
          stroke={color} />
      </svg>
      
      <svg
        className={`${styles.star} ${styles.star2}`}
        width="79"
        height="84"
        viewBox="0 0 79 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6548 11.6533C19.7149 10.6476 22.5363 9.00609 24.9209 6.84012C33.284 -0.756176 46.0494 -0.756178 54.4125 6.84011C56.7971 9.00609 59.6185 10.6476 62.6786 11.6533C73.3835 15.1713 79.731 26.3674 77.4135 37.4031C76.7482 40.571 76.7482 43.9277 77.4135 47.0956C79.731 58.1313 73.3835 69.3275 62.6786 72.8455C59.6185 73.8511 56.7971 75.4926 54.4125 77.6586C46.0494 85.2549 33.284 85.2549 24.9209 77.6586C22.5363 75.4926 19.7149 73.8511 16.6548 72.8455C5.94985 69.3275 -0.397622 58.1313 1.91989 47.0956C2.58514 43.9277 2.58514 40.571 1.91989 37.4031C-0.397622 26.3674 5.94985 15.1713 16.6548 11.6533Z"
          stroke={color} />
      </svg>
    </Link>
  )
}

Logo.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Logo
