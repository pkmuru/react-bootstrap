import React from 'react';
import ServerActions from './ServerActions';
import './theme/SearchPanel.scss';


export default class SearchPanel extends React.Component {




    render() {
        return <div className="search-header">
            <div className="search-input input-group-sm">
                <input className="form-control"></input>
                <button className="btn btn-sm btn-secondary">Search</button>
            </div>

            <div>
                e.g Search by User Name or Num
            </div>

        </div>
    }
}