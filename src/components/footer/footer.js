import React from 'react'

// Import component styles
import styles from './footer.module.less'

// Import components
import Logo from '../logo/logo'
import Copyright from '../copyright/copyright'
import SocialIcons from '../socialIcons/socialIcons'

const Footer = () => (
  <footer className={styles.footer}>
    
    <div className={`${styles.half} ${styles.copy}`}>
      
      <Logo color='#AFC7D4' />

      <Copyright
        color='#AFC7D4' />

    </div>

    <div className={`${styles.half} ${styles.social}`}>
      <SocialIcons />
    </div>
  </footer>
)

export default Footer
 