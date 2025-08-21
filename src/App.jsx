import React from 'react';
import {NavBar, Contact, Footer, Main, Gallery, Features, Item, Cart} from './components'
import styles from "./style";

const App = () => (

        <div className={`h-screen bg-[url(./assets/background.jpg)] bg-cover`}>
            <div className={`absolute inset-0 backdrop-blur-sm`}></div>
            <div>
                <div className={`${styles.boxWidth} ${styles.paddingX} fixed top-0 left-0 w-full z-50`}>
                    <NavBar/>
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Main/>
                </div>
            </div>

            <div className={`bg-black ${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Gallery/>
                    <Features/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>

        </div>

);
export default App;