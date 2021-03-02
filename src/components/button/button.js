import React from 'react'
import { Link } from 'gatsby'

// Import component styles
import styles from './button.module.less'

const Button = props => {
  const color = props.color
  const copy = props.copy
  const href = props.href

  return (
    <Link
      className={styles.button}
      style={{
        borderColor: `${color}`,
        color: `${color}`
      }}
      to={`/${href}`}
    >
      {copy}

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
          fill={color} />
      </svg>
    </Link>
  )
}

Button.defaultProps = {
  copy: 'Learn More',
  color: '#000000',
  href: '',
}

export default Button
