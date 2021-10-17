import * as React from 'react'
import {BrowserRouter as Router} from 'react-router-dom';
import {useState} from 'react';

const App = () => {
    const [name,setName] = useState('groove(in state2)')
    return (
        <div className="App" id='wrapper'>
            <Router>
                <div>
                    this is {name} react-template
                    hhhh
                </div>
            </Router>
        </div>
    )
}

export default App
