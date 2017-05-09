import React from 'react';
import ReactDOM from 'react-dom';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {white} from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Cancel from 'material-ui/svg-icons/action/highlight-off';
import Sort from 'material-ui/svg-icons/content/sort';
import { Link } from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import * as _ from 'lodash';
import Employee from './Employee';

class EmployeeListComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            sort: [
                {field: "name", dir: "asc"}
            ],
            savedSort: [
                {field: "name", dir: "asc"}
            ],
            sortingDialogIsOpen: false,
            filterDialogIsOpen: false,
        }
	}

    handleOpen = () => {
        this.setState({sortingDialogIsOpen: true});
    };

    handleClose = () => {
        this.state.sort = _.cloneDeep(this.state.savedSort);
        this.setState({sort: _.cloneDeep(this.state.sort)});
        this.setState({sortingDialogIsOpen: false});
    };

    handleSaveSort = () => {
        this.state.savedSort = _.cloneDeep(this.state.sort);
        this.setState({savedSort: _.cloneDeep(this.state.savedSort)});
        this.setState({sortingDialogIsOpen: false});
    };

    changeSortSelectField(event, index, value, i, name) {
        this.state.sort[i][name] = value;
        this.setState({sort: _.cloneDeep(this.state.sort)});
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
        const lookup = {
            field: [
                {lookupValue: 'name', lookupText: 'Name'},
                {lookupValue: 'location', lookupText: 'Location'},
                {lookupValue: 'grade', lookupText: 'Grade'},
                {lookupValue: 'join date', lookupText: 'Join Date'},
                {lookupValue: 'created date', lookupText: 'Created Date'},
                {lookupValue: 'modified date', lookupText: 'Modified Date'}
            ],
            dir: [
                {lookupValue: 'asc', lookupText: 'Ascending'},
                {lookupValue: 'desc', lookupText: 'Descending'}
            ],
        }
        const floatingButtonStyle = {
                position: 'absolute',
                top: '50%',
                right: '10%',
        }
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleSaveSort}
            />
        ];
        const title = <div style={{padding: '0px', backgroundColor:'#5c6bc0', height:'55px', textAlign: 'center', position: 'relative'}}>
                        <span style={{color: 'white', fontSize:'18px', display:'inline-block', position:'absolute', top: '50%', marginTop: '-16px', left: '50%', marginLeft: '-62px'}}>Sorting Options</span>
                        <Cancel color={'white'} onClick={this.handleClose} style={{position: 'absolute', cursor: 'pointer', right: '10px', top: '12px', width: '30px', height:'30px', verticalAlign: 'middle'}}/>
                    </div>

        const createSort = (i) => 
            <div style={{padding: '10px 10px 10px 10px'}} key={i}>
                <div className='col-xs-6' style={{textAlign: 'center', marginTop:'10px'}}>
                    <SelectField style={{width:'100%'}} 
                                value={this.state.sort[i].field}
                                onChange={(event, index, value)=>  this.changeSortSelectField(event, index, value, i, 'field')}>
                                { lookup.field.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectField>
                </div>
                <div className='col-xs-6' style={{textAlign: 'center', marginTop:'10px'}}>
                    <SelectField style={{width:'100%'}}
                                value={this.state.sort[i].dir}
                                onChange={(event, index, value)=>  this.changeSortSelectField(event, index, value, i, 'dir')}>
                                { lookup.dir.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectField>
                </div>
            </div>
        

		return (
			<div>
                <div>
                    <Dialog title={title}
                            modal={true}
                            actions={actions}
                            open={this.state.sortingDialogIsOpen}
                            contentStyle={{width: '536px', minHeight: '300px'}}>
                        <div style={{padding: '20px 10px 10px 10px'}}>
                            <div className='col-xs-6' style={{textAlign: 'center'}}>Sort By</div>
                            <div className='col-xs-6' style={{textAlign: 'center'}}>Sort Type</div>
                        </div>
                        {
                            this.state.sort.map((item,i)=>
                                createSort(i)
                            )
                        }
                    </Dialog>
                </div>
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
                    <Sort color={'white'} style={{cursor: 'pointer', display: 'inline-flex', verticalAlign: 'middle'}} onClick={this.handleOpen}/>
                </div>
                <div className="panel-list-container">
                    <List>
                         <FloatingActionButton secondary={true} style={floatingButtonStyle} containerElement={<Link to="/home/detail"/>}>
                            <ContentAdd />
                         </FloatingActionButton>
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