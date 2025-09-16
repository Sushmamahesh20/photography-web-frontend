import React from 'react';
import styles from "../style.js";
import {Contact, Features, Footer, Gallery, Main, NavBar} from "./index.js";

const MainPage = () => {
    return (
        <div className={`bg-black min-h-screen`}>
            <div className={`relative h-screen bg-[url(./assets/background.jpg)] bg-cover`}>
                <div>
                    <div className={`${styles.boxWidth} ${styles.paddingX} fixed top-0 left-0 w-full z-50`}>
                        <NavBar/>
                    </div>
                </div>
                <div className={`inset-0 backdrop-blur-sm`}>

                    <div className={`${styles.paddingX} ${styles.flexCenter} min-h-screen`}>
                        <div className={`${styles.boxWidth}`}>
                            <Main/>
                        </div>
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
        </div>
    );
};

export default MainPage;