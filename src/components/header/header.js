import React from 'react'

import styles from './header.module.less'
import Logo from '../logo/logo'
import Menu from '../menu/menu'

const Header = () => (
  <header className={styles.header}>
    <Menu />

    <div className={styles.headerLogo}>

      <div className={styles.logoHolder}>
        <Logo
          color='#000000' />
      </div>

      <svg
        className={styles.triangleWhite}
        width="239"
        height="161"
        viewBox="0 0 239 161"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        d="M78.8382 159.915L168.57 -174.969L413.722 70.1835L78.8382 159.915Z"
        fill="white"
        stroke="black" />
      </svg>

      <svg
        className={styles.triangleBlack}
        width="229"
        height="176"
        viewBox="0 0 229 176"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M78.8382 174.915L168.57 -159.969L413.722 85.1835L78.8382 174.915Z"
          fill="rgba(0,0,0,0.7)"
          stroke="black" />
      </svg>

    </div>
  </header>
)

export default Header
