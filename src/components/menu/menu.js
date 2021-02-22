import React, { useState } from 'react'
import { Link } from 'gatsby'

import styles from './menu.module.less'

const Menu = () => {
  const [state, setState] = useState({
    visible: false,
    hamClose: false,
    linkVisible: false,
    contentVisible: false,
  })

  const handleClick = () => {
    setState({
      ...state,
      visible: !state.visible,
      hamClose: !state.hamClose,
      linkVisible: !state.linkVisible,
      contentVisible: !state.contentVisible,
    })
  }

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menu}>

        <div
          className={`${styles.btn} ${state.visible ? styles.active : ''}`}
          onClick={handleClick}
        >
          <div className={`${styles.hamburger} ${state.hamClose ? styles.close : ''}`}>
            <div className={styles.patty}></div>
            <div className={styles.patty}></div>
            <div className={styles.patty}></div>
          </div>
        </div>

        <div className={`${styles.menuContent} ${state.contentVisible ? styles.active : ''}`}>
          <nav>
            <ul>
              <li className={state.linkVisible ? styles.active : ''}>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li className={state.linkVisible ? styles.active : ''}>
                <Link to='/about'>
                  About
                </Link>
              </li>
              <li className={state.linkVisible ? styles.active : ''}>
                <Link to='/'>
                  Link 3
                </Link>
              </li>
              <li className={state.linkVisible ? styles.active : ''}>
                <Link to='/'>
                  Link 4
                </Link>
              </li>
              <li className={state.linkVisible ? styles.active : ''}>
                <Link to='/'>
                  Link 5
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
  )
}

export default Menu
