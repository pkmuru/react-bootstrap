import React from 'react';
import './theme/Settings.scss';

export default class Settings extends React.Component {
    render() {
        return <div className="Settings">
            <button className="btn btn-sm btn-outline-danger">Bounce Server1</button>
            <button className="btn btn-sm btn-outline-danger">Refresh Cache</button>
            <button className="btn btn-sm btn-outline-danger">Bounce Server1</button>
        </div>
    }
}
