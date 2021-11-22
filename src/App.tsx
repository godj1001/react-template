import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';
import './App.scss'
const App = () => {
    const [name,setName] = useState('groove react template')
    return (
        <div className="App" id='wrapper'>
            <Router>
                <div className={'title'}>
                    <span>
                        {name}
                    </span>    
                </div>
            </Router>
        </div>
    )
}

export default App
