import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// Import component styles
import styles from './menu.module.less'

// Import components
// import Logo from '../logo/logo'
// import Copyright from '../copyright/copyright'
// import SocialIcons from '../socialIcons/socialIcons'

const Menu = ( props ) => (
  <div className={`${styles.menu} ${props.visible ? styles.open : ''}`}>
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
      <li>
        <Link
          to='/author'
          activeClassName={styles.active}
        >
          Author
        </Link>
      </li>
    </ul>

    {/* <div className={styles.footer}>
      <Logo
        color='#FFFFFF'
        addClass='menu' />

      <SocialIcons
        addClass='menu' />

      <Copyright
        color='#FFFFFF'
        addClass='menu' />
      
    </div> */}
  </div>
)

Menu.propTypes = {
  visible: PropTypes.bool,
}

export default Menu
