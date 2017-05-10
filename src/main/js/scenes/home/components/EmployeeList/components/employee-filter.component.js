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
                    <TextField value={this.state.filter[i].value}
                        hintText="value"
                        onChange={(event, index, value)=>  this.changeFilterTextField(event, value, i)}
                        underlineShow={false}/>
                </TableRowColumn>
            </TableRow>

        return (
            <div>
                <Filter color={'white'} style={svgStyle} onClick={this.handleOpenFilter}/>
                <Dialog title={titleFilter}
                        modal={true}
                        actions={actions}
                        open={this.state.filterDialogIsOpen}
                        contentStyle={{width: '536px', minHeight: '300px'}}>
                    <div style={{padding: '20px 10px 10px 0px'}}>
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
                    </div>
                    
                    <FloatingActionButton onClick={this.handleAddFilter} secondary={true} mini={true} style={{float: 'right'}}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Dialog>
            </div>
        )
    }
}