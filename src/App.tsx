import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';
import './App.scss'
const App = () => {
    const [name,setName] = useState('groove(in state2)')
    return (
        <div className="App" id='wrapper'>
            <Router>
                <div>
                    this is {name} react-template
                </div>
            </Router>
        </div>
    )
}

export default App
