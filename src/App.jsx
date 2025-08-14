import React from 'react';
import {NavBar, Contact, Footer, Main, Gallery} from './components'
import styles from "./style";

const App = () => (
    <div className={`h-screen bg-[url(./assets/background.jpg)] bg-cover`}>
        <div className={`absolute inset-0 backdrop-blur-sm`}></div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
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
                <Contact/>
                <Footer/>
            </div>
        </div>
    </div>

);
export default App;