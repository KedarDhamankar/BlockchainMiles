import React from 'react'
import styles from "../stylesheets/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <button className={styles.button}>Login</button>
    </div>
  )
}

export default Navbar