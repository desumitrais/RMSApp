import React from 'react';
import ReactDOM from 'react-dom';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {List} from 'material-ui/List';

import Employee from './Employee';

class EmployeeListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            searchMode: false,
            searchQuery: '',
            searchEmployee: {},
            filterMode: false,
            filterByCriteria: false,
            filterEmployee: {},
            sortingDialogIsOpen: false,
            filterDialogIsOpen: false,
        }
	}

	handleResetSearch(){
	    this.setState({
	        searchMode: false,
	        searchQuery: ''
        });
    }

    handleChangeSearchQueryValue(event, type) {
        var nextState = {};
        nextState[type] = event.target.value;
        this.setState(nextState);
    }

    handleUnSearchEmployee(event){
        if (event.target.value.length < 3){
            this.setState({
                searchMode: false,
            });
        }
    }

	render() {
		return (
			<div>
                <div className="panel-list-header">
                    <ActionSearch color={'white'} style={{display: 'inline-flex', verticalAlign: 'middle'}}></ActionSearch>
                    <TextField
                        value={this.state.searchQuery}
                        hintText="Search"
                        onChange={event => this.handleChangeSearchQueryValue(event, 'searchQuery')}
                        onBlur={this.handleUnSearchEmployee.bind(this)}
                        underlineStyle={{display: 'none'}}
                        style ={{width: '40%'}}
                        inputStyle={{color: white}}
                        hintStyle={{color: white}}/>
                </div>
                <div className="panel-list-container">
                    <List>
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
			</div>
		)
	}
}

export default EmployeeListComponent;