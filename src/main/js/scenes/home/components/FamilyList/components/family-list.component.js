import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { ValidatorForm, TextValidator, DateValidator, SelectValidator} from 'react-material-ui-form-validator';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';
import Cancel from 'material-ui/svg-icons/content/clear';
import Save from 'material-ui/svg-icons/action/done';
import moment from 'moment';
import appStore  from '../../../../../store/app.store';
import { fetchFamilyList, setEditMode, updateFamily, deleteFamily, addNewFamilyRow, deleteUnsavedFamilyRow, addNewFamily } from '../../../../../actions/family-list.action';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { FamilyTypes } from '../../../../../constants/family.constant';

class FamilyListComponent extends React.Component {

	constructor(props) {
		super(props);
    this.state =  props.families && props.families.length >0 ? { families: props.families.map(obj => Object.assign({}, obj)), temporary: {selectedFamily: {}, isSaved: false}} : { families: [], temporary:{ selectedFamily: {}, isSaved: false }};
    this.changeTextField = this.changeTextField.bind(this);
    this.changeSelectField = this.changeSelectField.bind(this);
    this.changeDateField = this.changeDateField.bind(this);
    this.handleSave = this.handleSave.bind(this);
	}

  componentWillReceiveProps(nextProps) {
    this.setState( nextProps.families && nextProps.families.length >0 ? { families: nextProps.families.map(obj => Object.assign({}, obj)), temporary: {selectedFamily: {}, isSaved: false}} : { families: [], temporary:{ selectedFamily: {}, isSaved: false }});
  }

  componentDidMount(nextProps) {
    appStore.dispatch(fetchFamilyList(this.props.selectedEmployee.id));
  }

  handleEdit(familyId) {
     appStore.dispatch(setEditMode(familyId, true));
  }

  handleDelete(familyId) {
     appStore.dispatch(deleteFamily(this.props.selectedEmployee.id, familyId));
  }

  handleCancel(familyId,isSaved) {
     if(isSaved){
      appStore.dispatch(setEditMode(familyId, false));
     }else{
       appStore.dispatch(deleteUnsavedFamilyRow(familyId));
     }
  }


  handleSave() {
    debugger;
    let family = this.state.temporary.selectedFamily;
    let isSaved = this.state.temporary.isSaved;
    if(isSaved){
      appStore.dispatch(updateFamily(family));
    }else{
      family.employeeGUID = this.props.selectedEmployee.id;
      appStore.dispatch(addNewFamily(family));
    }
  }

  handleSaveTemporary(family, isSaved) {
    let temp = {
      selectedFamily : family,
      isSaved: isSaved
    }
    console.log(temp);
    this.setState({temporary: temp});
  }

  handleCreateNewRow() {
    appStore.dispatch(addNewFamilyRow());
  }

  changeTextField(object,value,i,name) {
    this.state.families[i][name] = value;
    this.setState({families: this.state.families});
  }

  changeSelectField(event, index, value, i, name) {
    this.state.families[i][name] = value;
    this.setState({families: this.state.families});
  }

  changeDateField(event, date, i, name) {
    this.state.families[i][name] = date;
    this.setState({families: this.state.families});
  }

  changeCheckBoxField(event, isInputChecked, i, name){
    this.state.families[i][name] = isInputChecked ? 1 : 2;
    this.setState({families: this.state.families});
  }

	render() {
    const readOnly = (family,i) => 
      <TableRow key={i}>
          <TableRowColumn style={{width:'300px'}}>
            {family.firstName + " " + family.lastName}
          </TableRowColumn>
          <TableRowColumn>{family.genderStr}</TableRowColumn>
          <TableRowColumn>{moment(family.dob).format("MMM DD, YYYY")}</TableRowColumn>
          <TableRowColumn>{family.familyTypeStr}</TableRowColumn>
          <TableRowColumn style={{width:'50px'}}>
            <Checkbox
              checked={family.recordStatusID === 1? true : false}
            />
          </TableRowColumn>
          <TableRowColumn>
            <IconButton value={family.id} onClick={() =>this.handleEdit(family.id)}>
                <Edit/>
            </IconButton>
            <IconButton value={family.id} onClick={() =>this.handleDelete(family.id)}>
                <Delete/>
            </IconButton>
          </TableRowColumn>
        </TableRow>  

    const convertToDate = (date) => 
      new Date(date)

    const getLookup = (lookupValue) =>
      FamilyType.find((obj) => { obj.lookupValue === lookupValue})
    
    const editMode = (family,i) => 
      <TableRow key={i}>
          <TableRowColumn style={{width:'300px'}}>
              <TextValidator hintText="First Name"
                              name="firstName" 
                              validators={['required']}
                              errorMessages={['first name is required']}
                              value={family.firstName} onChange={(object, value)=>  this.changeTextField(object,value,i,"firstName")} 
                              style={{width:'140px'}}/>
              <TextValidator hintText="Last Name"  
                              name="lastName" 
                              validators={['required']}
                              errorMessages={['last name is required']}
                              value={family.lastName}
                              onChange={(object, value)=>  this.changeTextField(object,value,i,"lastName")} 
                              style={{width:'140px'}}/>
          </TableRowColumn>
          <TableRowColumn >
            <SelectValidator hintText= "Gender"
                              name="gender" 
                              validators={['required']}
                              errorMessages={['gender is required']}
                              value={family.genderID}
                              onChange={(event, index, value)=>  this.changeSelectField(event, index, value,i,"genderID")} style={{verticalAlign: 'bottom'}}>
              <MenuItem value={"M"} primaryText="Male" />
              <MenuItem value={"F"} primaryText="Female" />
            </SelectValidator>
          </TableRowColumn>
          <TableRowColumn >
            <DateValidator hintText="DOB" 
                            name="dob" 
                            validators={['required']}
                            errorMessages={['dob is required']}
                            mode="landscape" 
                            value={convertToDate(family.dob)} onChange={(event, date)=>  this.changeDateField(event, date, i,"dob")}/>
          </TableRowColumn>
          <TableRowColumn >
              <SelectValidator hintText= "Family Type"
                                name="family type" 
                                validators={['required']}
                                errorMessages={['family type is required']}
                                value={family.familyTypeID}
                                onChange={(event, index, value)=>  this.changeSelectField(event, index, value,i,"familyTypeID")} style={{verticalAlign: 'bottom'}}>
                  {
                    FamilyTypes.map((lookup,i) => 
                        <MenuItem key={i} value={lookup.lookupValue} primaryText={lookup.lookupText} />
                    )
                  }
              </SelectValidator>
          </TableRowColumn>
          <TableRowColumn style={{width:'50px'}}> 
              <Checkbox
                checked={family.recordStatusID === 1? true : false}
                onCheck={(event, isInputChecked)=>  this.changeCheckBoxField(event, isInputChecked, i,"recordStatusID")}
              /> 
          </TableRowColumn>
          <TableRowColumn>
              <IconButton type="submit" onClick={() =>this.handleSaveTemporary(family, family.saved)}>
                  <Save/>
              </IconButton>
              <IconButton value={family.id} onClick={() =>this.handleCancel(family.id, family.saved)}>
                  <Cancel/>
              </IconButton>
          </TableRowColumn>
      </TableRow>

    const floatingButtonStyle = {
        position: 'absolute',
        bottom: '0',
        right: '10%',
    }
    
		return (
			<div>
          <FloatingActionButton secondary={true} style={floatingButtonStyle} onClick={this.handleCreateNewRow}>
            <ContentAdd />
          </FloatingActionButton>
          { this.state.families && this.state.families.length>0 ? (
            <ValidatorForm ref="form"
                onSubmit={() =>this.handleSave()}>
                <Table  selectable={false}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn style={{width:'300px'}}>Name</TableHeaderColumn>
                        <TableHeaderColumn>Gender</TableHeaderColumn>
                        <TableHeaderColumn>DOB</TableHeaderColumn>
                        <TableHeaderColumn>Type</TableHeaderColumn>
                        <TableHeaderColumn style={{width:'50px'}}>Active</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                <TableBody displayRowCheckbox={false}>
                {
                  this.state.families.map((family,i) =>
                      family.editMode ?  editMode(family,i) : readOnly(family,i)
                  )
                }
                </TableBody>
                </Table>
                </ValidatorForm>
              ) : (
                <div className="no-record">
                    <span>No Record Found</span>
                </div>
              )
        }
			</div>
		)
	}
}

FamilyListComponent.defaultProps = { 
    families: []
}

export default FamilyListComponent;