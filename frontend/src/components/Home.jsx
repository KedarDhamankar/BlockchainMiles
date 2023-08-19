import React from 'react'
import styles from "../stylesheets/Home.module.css"

import Navbar from './Navbar'

import customer from '../assets/customer-loyalty.png'

const Home = () => {
  return (
    <div className={styles.container}>
        <Navbar/>
        <div>
            <div>
                <p>BlockchainMiles</p>

                <p>Miles of Loyalty, Built on Blockchain.</p>

                <p>Welcome to BlockchainMiles, where loyalty knows no bounds. Our innovative platform rewards you with tokens, each step of your journey - whether it's sharing your stories on social media, making purchases, or contributing to our affiliate program. Seamlessly integrated with our e-commerce ecosystem, your loyalty becomes a valuable asset, all thanks to the power of blockchain technology.</p>

            </div>
            <div>
                <img src={customer} alt='Customer Image'/>
            </div>
        </div>
    </div>
    
  )
}

export default Home