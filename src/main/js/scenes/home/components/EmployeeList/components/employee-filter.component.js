//react depedencies
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

//redux store
import appStore  from '../../../../../store/app.store';

//material ui depedencies
import ContentAdd from 'material-ui/svg-icons/content/add';
import Cancel from 'material-ui/svg-icons/action/highlight-off';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Filter from 'material-ui/svg-icons/content/filter-list';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import {white} from 'material-ui/styles/colors';
import { ValidatorForm, TextValidator, DateValidator, SelectValidator} from 'react-material-ui-form-validator';

//other
import * as _ from 'lodash';


export default class EmployeeFilterComponent extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            filter: [],
            savedFilter: props.savedFilter,
            filterDialogIsOpen: false,
        }
	}

    componentWillReceiveProps(nextProps) {
        this.setState( nextProps.savedFilter ? { savedFilter: nextProps.savedFilter } : { savedFilter: []});
    }

    handleAddFilter = () => {
        this.state.filter = [..._.cloneDeep(this.state.filter), {field: "name", operator: "eq", value: ''}];
        this.setState({filter: _.cloneDeep(this.state.filter)});
    }

    handleRemoveFilter = (index) => {
        this.state.filter = [
            ...this.state.filter.slice(0,index),
            ...this.state.filter.slice(index+1)
        ]
        this.setState({filter: _.cloneDeep(this.state.filter)});
    }

    handleOpenFilter = () => {
        this.setState({filter: _.cloneDeep(this.state.savedFilter)});
        this.setState({filterDialogIsOpen: true});
    };

    handleCloseFilter = () => {
        this.state.filter = _.cloneDeep(this.state.savedFilter);
        this.setState({filter: _.cloneDeep(this.state.filter)});
        this.setState({filterDialogIsOpen: false});
    };

    handleSaveFilter = () => {
        appStore.dispatch({
            type: 'SET_FILTER',
            payload: _.cloneDeep(this.state.filter)
        });
        this.setState({filterDialogIsOpen: false});
    };

    changeFilterSelectField(event, index, value, i, name) {
        this.state.filter[i][name] = value;
        this.setState({filter: _.cloneDeep(this.state.filter)});
    }

    changeFilterTextField(object, value, i) {
        this.state.filter[i].value = value;
        this.setState({filter: _.cloneDeep(this.state.filter)});
    }

    changeDateField(event, date, i) {
        this.state.filter[i].value = date;
        this.setState({filter: _.cloneDeep(this.state.filter)});
    }

    render() {
        const svgStyle={
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            marginTop: '-12px',
        }
        const lookup = {
            field: [
                {lookupValue: 'name', lookupText: 'Name', type: 'string'},
                {lookupValue: 'location', lookupText: 'Location', type: 'string'},
                {lookupValue: 'gradeID', lookupText: 'Grade', type: 'string'},
                {lookupValue: 'hireDate', lookupText: 'Join Date', type: 'date'},
                {lookupValue: 'createdDate', lookupText: 'Created Date', type: 'date'},
                {lookupValue: 'updatedDate', lookupText: 'Modified Date', type: 'date'}
            ],
            operator: [
                {lookupValue: 'eq', lookupText: 'Equal', type: 'any'},
                {lookupValue: 'contain', lookupText: 'Contain', type: 'string'},
                {lookupValue: 'startswith', lookupText: 'Starts With', type: 'string'},
                {lookupValue: 'greater than', lookupText: 'Greater Then', type: 'date'},
                {lookupValue: 'smaller than', lookupText: 'Smaller Then', type: 'date'}
            ],
            location: [
                {lookupValue: 1, lookupText: 'Bali Office'},
                {lookupValue: 2, lookupText: 'Yogyakarta Office'},
                {lookupValue: 3, lookupText: 'Jakarta Office'}
            ],
            grade: [
                {lookupValue: 1, lookupText: 'SE-JP'},
                {lookupValue: 2, lookupText: 'SE-PG'},
                {lookupValue: 3, lookupText: 'SE-AP'},
                {lookupValue: 4, lookupText: 'SE-AN'}
            ]
        }
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleSaveFilter}
            />
        ];
        const titleFilter = <div style={{padding: '0px', backgroundColor:'#5c6bc0', height:'55px', textAlign: 'center', position: 'relative'}}>
                        <span style={{color: 'white', fontSize:'18px', display:'inline-block', position:'absolute', top: '50%', marginTop: '-16px', left: '50%', marginLeft: '-62px'}}>Filtering Options</span>
                        <Cancel color={'white'} onClick={this.handleCloseFilter} style={{position: 'absolute', cursor: 'pointer', right: '10px', top: '12px', width: '30px', height:'30px', verticalAlign: 'middle'}}/>
                    </div>

        const convertToDate = (date) => 
            new Date(date)

        const createFilter = (i) => 
            <TableRow key={i}>
                <TableRowColumn style={{width:'50px', textAlign: 'center', marginTop:'5px'}}>
                    <Cancel color={'red'} onClick={ () => this.handleRemoveFilter(i) } style={{cursor: 'pointer', verticalAlign: 'middle'}}/>
                </TableRowColumn>
                <TableRowColumn style={{width:'150px', textAlign: 'center', marginTop:'5px'}}>
                    <SelectField style={{width:'100%', marginTop: '10px'}} 
                                value={this.state.filter[i].field}
                                underlineShow={false}
                                onChange={(event, index, value)=>  this.changeFilterSelectField(event, index, value, i, 'field')}>
                                { lookup.field.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectField>
                </TableRowColumn>
                <TableRowColumn style={{width:'150px', textAlign: 'center', marginTop:'5px'}}>
                    <SelectField style={{width:'100%', marginTop: '10px'}}
                                value={this.state.filter[i].operator}
                                underlineShow={false}
                                onChange={(event, index, value)=>  this.changeFilterSelectField(event, index, value, i, 'operator')}>
                                { lookup.operator.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectField>
                </TableRowColumn>  
                <TableRowColumn style={{width:'150px', textAlign: 'center', marginTop:'5px'}}>
                    { this.state.filter[i].field === 'name'  &&
                    <TextValidator value={this.state.filter[i].value}
                        name={this.state.filter[i].field}
                        hintText="value"
                        validators={['required']}
                        errorMessages={['field is required']}
                        onChange={(event, value)=>  this.changeFilterTextField(event, value, i)}
                        underlineShow={false}/> 
                    } 
                    { this.state.filter[i].field === 'location' &&
                    <SelectValidator style={{width:'100%', marginTop: '10px'}}
                                name={this.state.filter[i].field}
                                hintText="location"
                                validators={['required']}
                                errorMessages={['field is required']}
                                autoWidth={true}
                                value={this.state.filter[i].value}
                                underlineShow={false}
                                onChange={(event, index, value)=>  this.changeFilterSelectField(event, index, value, i, 'value')}>
                                { lookup.location.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectValidator>
                    }
                    { this.state.filter[i].field === 'gradeID' &&
                    <SelectValidator style={{width:'100%', marginTop: '10px'}}
                                name={this.state.filter[i].field}
                                hintText="grade"
                                validators={['required']}
                                errorMessages={['field is required']}
                                autoWidth={true}
                                value={this.state.filter[i].value}
                                underlineShow={false}
                                onChange={(event, index, value)=>  this.changeFilterSelectField(event, index, value, i, 'value')}>
                                { lookup.grade.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectValidator>
                    }
                    { (this.state.filter[i].field === 'hireDate' || this.state.filter[i].field === 'createdDate' || this.state.filter[i].field === 'updatedDate' ) &&
                        <DateValidator hintText={this.state.filter[i].field} 
                            name={this.state.filter[i].field}
                            hintText="date"
                            validators={['required']}
                            errorMessages={['date is required']}
                            underlineShow={false}
                            mode="landscape" 
                            value={this.state.filter[i].value} 
                            onChange={(event, date)=>  this.changeDateField(event, date, i)}/>
                    }
                </TableRowColumn>
            </TableRow>

        return (
            <div>
                <Filter color={'white'} style={svgStyle} onClick={this.handleOpenFilter}/>
                <Dialog title={titleFilter}
                        modal={true}
                        actions={actions}
                        open={this.state.filterDialogIsOpen}
                        contentStyle={{width: '600px', minHeight: '300px'}}>
                    <div style={{padding: '20px 10px 10px 0px'}}>
                        <ValidatorForm ref="form"
                                       onSubmit={() =>this.handleSaveFilter()}>
                            <Table selectable={false}>
                                <TableBody displayRowCheckbox={false}>
                                    <TableRow>
                                        <TableRowColumn style={{width:'50px', fontSize: '18px'}}></TableRowColumn>
                                        <TableRowColumn style={{width:'150px', fontSize: '18px'}}>Filter By</TableRowColumn>
                                        <TableRowColumn style={{width:'150px', fontSize: '18px'}}>Operator</TableRowColumn>
                                        <TableRowColumn style={{width:'150px', fontSize: '18px'}}>Value</TableRowColumn>
                                    </TableRow>
                                    {
                                        this.state.filter.map((item,i)=>
                                            createFilter(i)
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </ValidatorForm>
                    </div>
                    
                    <FloatingActionButton onClick={this.handleAddFilter} secondary={true} mini={true} style={{float: 'right'}}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Dialog>
            </div>
        )
    }
}