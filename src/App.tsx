import * as React from 'react';
import {useState} from 'react';
import Style from './App.module.scss';
const App = () => {
    const [name, setName] = useState('groove react template');
    return (
        <div className={Style.App} id='wrapper'>
            <div className={Style.box1}>
            </div>
            <div className={Style.box2}></div>
            <div className={Style.title}>
                <span className={Style.firstWord}>
                    G
                </span>
                <span className={Style.other}>
                    roove
                </span>
            </div>
        </div>
    );
};

export default App;
