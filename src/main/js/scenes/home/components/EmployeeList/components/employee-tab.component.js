import React from 'react';
import ReactDOM from 'react-dom';

//other components
import EmployeeToolbarComponent from './employee-toolbar.component';
import EmployeeListContainer from '../containers/employee-list.container';

export default class EmployeeTabComponent extends React.Component {
    render() {
        return (
            <div >
                <EmployeeToolbarComponent />
                <EmployeeListContainer />
            </div>
        )
    }
}