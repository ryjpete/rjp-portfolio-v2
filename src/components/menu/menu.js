import React from 'react'
import { Link } from 'gatsby'

// Import component styles
import styles from './menu.module.less'

const Menu = (props) => {
  return (
    <div className={`${styles.menu} ${props.visible ? styles.open : ''}`}>
      <ul className={styles.links}>
        <li>
          <Link to='/' >
            Home
          </Link>
        </li>
        <li>
          <Link to='/about'>
            About
          </Link>
        </li>
        <li>
          <Link to='/resume'>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
