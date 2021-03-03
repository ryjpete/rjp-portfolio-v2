import React from 'react'
import PropTypes from 'prop-types'

// Import component styles
import styles from './menuTrigger.module.less'

const MenuTrigger = ( props ) => {
  let visible = props.visible

  return (
    <div
      className={`${styles.hamburger} ${visible ? styles.active : ''}`}
      onClick={() => props.onClick()}
      onKeyDown={() => props.onClick()}
      role='button'
      tabIndex={0}
    >
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
    </div>
  )
}

MenuTrigger.propTypes = {
  visible: PropTypes.bool,
}

export default MenuTrigger
