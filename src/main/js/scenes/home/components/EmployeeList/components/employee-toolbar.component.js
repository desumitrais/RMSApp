import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-grid-system';

//other components & containers
import EmployeeSortContainer from '../containers/employee-sort.container';
import EmployeeFilterContainer from '../containers/employee-filter.container';
import EmployeeSearchContainer  from '../containers/employee-search.container';
import EmployeeCountContainer  from '../containers/employee-count.container';

export default class EmployeeToolbarComponent extends React.Component {

    render(){
        const styles = {
            column: {
                height: '50px'
            },
            container: {
                display: 'flex',
                height: '45px'
            }
        }
        
        return (
            <div  style={styles.container}>
                <Col xs={5}><EmployeeSearchContainer /></Col>
                <Col xs={4}></Col>
                <Col xs={3} style={styles.column}>
                    <div style={{height: '50px', width: '30px', float: 'left'}}>
                        <EmployeeSortContainer />
                    </div>
                    <div style={{height: '50px', width: '30px', float: 'left'}}>
                        <EmployeeFilterContainer />
                    </div>
                    <div style={{height: '50px', width: '30px', float: 'left'}}>
                        <EmployeeCountContainer />
                    </div>
                </Col>
            </div>
        )
    }
}
