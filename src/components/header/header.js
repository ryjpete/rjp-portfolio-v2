import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './header.module.less'

// Import components
import Logo from '../logo/logo'
import MenuTrigger from '../menuTrigger/menuTrigger'

const Header = ( props ) => {
  let visible = props.visible
  let menuTriggerClick = props.menuTriggerClick

  return (
    <header className={`${styles.header} ${visible ? styles.active : ''}`}>

      <MenuTrigger
        visible={visible}
        onClick={menuTriggerClick} />

      <div className={styles.headerLogo}>

        <div className={styles.logoHolder}>
          <Logo
            color='#000000' />
        </div>

        <div className={`${styles.polygon} ${styles.polygonTop}`}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points="27,0 0,100 100,73 100,0" />
          </svg>
        </div>

        <div className={`${styles.polygon} ${styles.polygonBottom}`}>
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points='42,0 14,100 100,77 100,0' />
          </svg>
        </div>

      </div>
    </header>
  )
}

Header.propTypes = {
  visible: PropTypes.bool,
  menuTriggerClick: PropTypes.func,
}

export default Header
