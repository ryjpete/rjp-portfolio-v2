import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Import component styles
import styles from './menu.module.less'

const Menu = ( props ) => {
  let visible = props.visible

  return (
    <div className={`${styles.menu} ${visible ? styles.open : ''}`}>
      <ul className={styles.links}>
        <li>
          <Link
            to='/'
            activeClassName={styles.active}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            activeClassName={styles.active}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/resume'
            activeClassName={styles.active}
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  )
}

Menu.propTypes = {
  visible: PropTypes.bool,
}

export default Menu
