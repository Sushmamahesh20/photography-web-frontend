import React, {useEffect, useState} from 'react';
import {TransitionPage, MainPage} from './components/index.js'

const App = () => {
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {showLogo ? <TransitionPage/> : <MainPage/>}
        </div>
    );

};
export default App;