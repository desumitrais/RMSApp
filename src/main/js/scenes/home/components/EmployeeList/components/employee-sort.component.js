//react depedencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-grid-system';

//redux store
import appStore  from '../../../../../store/app.store';

//material ui depedencies
import ContentAdd from 'material-ui/svg-icons/content/add';
import Cancel from 'material-ui/svg-icons/action/highlight-off';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Sort from 'material-ui/svg-icons/content/sort';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

//other
import * as _ from 'lodash';


export default class EmployeeSortComponent extends React.Component {

    constructor(props) {
		super(props);
		this.state = {
            sort: [],
            savedSort: props.savedSort,
            sortingDialogIsOpen: false,
        }
	}

    handleAddSort = () => {
        this.state.sort = [..._.cloneDeep(this.state.sort), {field: "name", dir: "asc"}];
        this.setState({sort: _.cloneDeep(this.state.sort)});
    }

    handleRemoveSort = (index) => {
        this.state.sort = [
            ...this.state.sort.slice(0,index),
            ...this.state.sort.slice(index+1)
        ]
        this.setState({sort: _.cloneDeep(this.state.sort)});
    }

    handleOpenSort = () => {
        this.setState({sort: _.cloneDeep(this.state.savedSort)});
        this.setState({sortingDialogIsOpen: true});
    };

    handleCloseSort = () => {
        this.state.sort = _.cloneDeep(this.state.savedSort);
        this.setState({sort: _.cloneDeep(this.state.sort)});
        this.setState({sortingDialogIsOpen: false});
    };

    handleSaveSort = () => {
        appStore.dispatch({
            type: 'SET_SORT',
            payload: _.cloneDeep(this.state.sort)
        });
        this.setState({sortingDialogIsOpen: false});
    };

    changeSortSelectField(event, index, value, i, name) {
        this.state.sort[i][name] = value;
        this.setState({sort: _.cloneDeep(this.state.sort)});
    }

    render() {
        const svgStyle={
            cursor: 'pointer',
            position: 'absolute',
            top: '50%',
            marginTop: '-12px'
        }
        const lookup = {
            field: [
                {lookupValue: 'name', lookupText: 'Name'},
                {lookupValue: 'location', lookupText: 'Location'},
                {lookupValue: 'gradeID', lookupText: 'Grade'},
                {lookupValue: 'hireDate', lookupText: 'Join Date'},
                {lookupValue: 'createdDate', lookupText: 'Created Date'},
                {lookupValue: 'updatedDate', lookupText: 'Modified Date'}
            ],
            dir: [
                {lookupValue: 'asc', lookupText: 'Ascending'},
                {lookupValue: 'desc', lookupText: 'Descending'}
            ],
        }
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleSaveSort}
            />
        ];
        const titleSort = <div style={{padding: '0px', backgroundColor:'#5c6bc0', height:'55px', textAlign: 'center', position: 'relative'}}>
                        <span style={{color: 'white', fontSize:'18px', display:'inline-block', position:'absolute', top: '50%', marginTop: '-16px', left: '50%', marginLeft: '-62px'}}>Sorting Options</span>
                        <Cancel color={'white'} onClick={this.handleCloseSort} style={{position: 'absolute', cursor: 'pointer', right: '10px', top: '12px', width: '30px', height:'30px', verticalAlign: 'middle'}}/>
                    </div>

        const createSort = (i) => 
            <div style={{padding: '10px 10px 10px 10px'}} key={i}>
                <Col xs={1} style={{textAlign: 'center', marginTop:'5px'}}>
                    <Cancel color={'red'} onClick={ () => this.handleRemoveSort(i) } style={{marginTop: '15px', cursor: 'pointer', verticalAlign: 'middle'}}/>
                </Col>
                <Col xs={5} style={{textAlign: 'center', marginTop:'5px'}}>
                    <SelectField style={{width:'100%'}} 
                                value={this.state.sort[i].field}
                                onChange={(event, index, value)=>  this.changeSortSelectField(event, index, value, i, 'field')}>
                                { lookup.field.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectField>
                </Col>
                <Col xs={1}  style={{textAlign: 'center', marginTop:'5px'}}>
                </Col>
                <Col xs={5}  style={{textAlign: 'center', marginTop:'5px'}}>
                    <SelectField style={{width:'100%'}}
                                value={this.state.sort[i].dir}
                                onChange={(event, index, value)=>  this.changeSortSelectField(event, index, value, i, 'dir')}>
                                { lookup.dir.map((item,i)=>
                                    <MenuItem key={i} value={item.lookupValue} primaryText={item.lookupText} />   
                                )}
                    </SelectField>
                </Col>
            </div>

        return (
            <div>
                <Sort color={'white'} style={svgStyle} onClick={this.handleOpenSort}/>
                <Dialog title={titleSort}
                        modal={true}
                        actions={actions}
                        open={this.state.sortingDialogIsOpen}
                        contentStyle={{width: '536px', minHeight: '300px'}}>
                    <div style={{padding: '20px 10px 10px 10px'}}>
                        <Col xs={6} style={{textAlign: 'center'}}>Sort By</Col>
                        <Col xs={6} style={{textAlign: 'center'}}>Sort Type</Col>
                    </div>
                    {
                        this.state.sort.map((item,i)=>
                            createSort(i)
                        )
                    }
                    <FloatingActionButton onClick={this.handleAddSort} secondary={true} mini={true} style={{float: 'right'}}>
                        <ContentAdd />
                    </FloatingActionButton>
                </Dialog>
            </div>
        )
    }
}