import React from 'react'
import styles from "../stylesheets/Home.module.css"

import Navbar from './Navbar'

import customer from '../assets/customer-loyalty.png'

const Home = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <div className={styles.firstout}>
            <div className={styles.titlediv}>
                <p className={styles.title1}>BlockchainMiles</p>

                <p className={styles.title2}>Miles of Loyalty, Built on Blockchain.</p>

                <p className={styles.title3}>Welcome to BlockchainMiles, where loyalty knows no bounds. Our innovative platform rewards you with tokens, each step of your journey - whether it's sharing your stories on social media, making purchases, or contributing to our affiliate program. Seamlessly integrated with our e-commerce ecosystem, your loyalty becomes a valuable asset, all thanks to the power of blockchain technology.</p>

            </div>
            <div className={styles.logoimg}>
                <img src={customer} alt='Customer Image'/>
            </div>
        </div>
    </div>
    
  )
}

export default Home