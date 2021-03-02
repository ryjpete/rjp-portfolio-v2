// import React, { useState } from 'react'
import React from 'react'

// Import component styles
import styles from './header.module.less'

// Import components
import Logo from '../logo/logo'
// import Menu from '../menu/menu'
import MenuTrigger from '../menuTrigger/menuTrigger'

const Header = (props) => {
  // const [state, setState] = useState({
  //   visible: false,
  // })

  // const handleClick = () => {
  //   console.log('clicked')

  //   setState({
  //     ...state,
  //     visible: !state.visible,
  //   })
  // }

  return (
    <header className={`${styles.header} ${props.visible ? styles.active : ''}`}>

      {/* <Menu
        visible={state.visible} /> */}

      <MenuTrigger
        visible={props.visible}
        onClick={props.menuTriggerClick} />

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

export default Header
