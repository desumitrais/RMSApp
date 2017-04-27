import React from 'react';
import ReactDOM from 'react-dom';

import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class EmployeeList extends React.Component {

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
                    <IconButton onTouchTap={this.handleResetSearch.bind(this)}>
                        {   this.state.searchMode ? <NavigationClose color={white} /> :
                            <ActionSearch color={white} /> }
                    </IconButton>
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
                    <div className="no-record">
                        <span>No Record Found</span>
                    </div>
                </div>
			</div>
		)
	}
}

export default EmployeeList;