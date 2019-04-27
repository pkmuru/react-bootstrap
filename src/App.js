import React from 'react';
import SearchPanel from './SearchPanel';
import UserInfo from './UserInfo';
import Settings from './Settings';

import './theme/App.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="title">
                    <span>App</span>
                    <span>Admin Console</span></div>
            </header>


            <div className="App-Body">
                <SearchPanel/>
                <UserInfo/>
                <Settings/>
            </div>
        </div>
    );
}

export default App;
