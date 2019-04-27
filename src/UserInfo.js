import React from 'react';
import './theme/UserInfo.scss';

export default class UserInfo extends React.Component {
    render() {
        return <div className="User-info">

            <table className="table table-sm">
                <tbody>
                <tr>
                    <th scope="row">Roles</th>
                    <td>Mark</td>
                </tr>
                <tr>
                    <th scope="row">Entitlements</th>
                    <td>Jacob</td>
                </tr>
                <tr>
                    <th scope="row">System1</th>
                    <td colspan="2">Larry the Bird</td>
                </tr>
                <tr>
                    <th scope="row">System2</th>
                    <td colspan="2">Larry the Bird <span class="badge badge-pill badge-danger">Missing profile</span>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    }
}