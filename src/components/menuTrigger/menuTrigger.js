import React from 'react'

// Import component styles
import styles from './menuTrigger.module.less'

const MenuTrigger = (props) => {

  return (
    <div
      className={`${styles.hamburger} ${props.visible ? styles.active : ''}`}
      onClick={() => props.onClick()}
    >
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
      <div className={styles.patty}></div>
    </div>
  )
}

export default MenuTrigger
