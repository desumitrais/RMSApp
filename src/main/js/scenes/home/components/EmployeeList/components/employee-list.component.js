import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//material ui depedencies
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

//other components
import Employee from './employee.component';

class EmployeeListComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
        const floatingButtonStyle = {
                position: 'absolute',
                top: '50%',
                right: '10%',
        }
		return (
            <div>
                <FloatingActionButton secondary={true} style={floatingButtonStyle} containerElement={<Link to="/home/detail"/>}>
                        <ContentAdd />
                </FloatingActionButton>
                <List style={{padding: '0px'}}>
                    { this.props.employees && this.props.employees.length>0 ? 
                        this.props.employees.map((employee,i) =>
                                <Employee key={i} 
                                employee={employee}
                                selectEmployee={this.props.selectEmployee}/>
                        )
                            : (
                            <div className="no-record">
                                <span>No Record Found</span>
                            </div>
                        )
                    }
                </List>
            </div>
		)
	}
}

export default EmployeeListComponent;