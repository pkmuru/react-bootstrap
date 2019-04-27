import React from 'react';
import './theme/app.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <div className="App-body">

                <input className="form-control"></input>
                <button type="button" className="btn btn-secondary">Primary</button>

            </div>


        </div>
    );
}

export default App;
