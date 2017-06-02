import React from 'react';
import ReactDOM from 'react-dom';

import appStore  from '../../../../../store/app.store';
import {
    fetchGradeList,
    setEditMode
} from '../actions/grade-list.action';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Cancel from 'material-ui/svg-icons/content/clear';
import Save from 'material-ui/svg-icons/action/done';
import ContentAdd from 'material-ui/svg-icons/content/add';

import moment from 'moment';
import { ValidatorForm, TextValidator, DateValidator, SelectValidator} from 'react-material-ui-form-validator';
import MenuItem from 'material-ui/MenuItem';


class GradeListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state =  props.grades && props.grades.length >0 ? { grades: props.grades.map(obj => Object.assign({}, obj))} : { grades: []};
    }

    componentDidMount(nextProps) {
        appStore.dispatch(fetchGradeList(this.props.selectedEmployee.id));
    }

    componentWillReceiveProps(nextProps) {
        this.setState( nextProps.grades && nextProps.grades.length >0 ? { grades: nextProps.grades.map(obj => Object.assign({}, obj))} : { grades: []});
    }

    handleEdit(gradeId) {
        appStore.dispatch(setEditMode(gradeId, true));
    }

    render() {
        const readOnly = (grade, i) =>
            <TableRow key={i}>
                <TableRowColumn>{grade.ds}</TableRowColumn>
                <TableRowColumn>{grade.gradeID}</TableRowColumn>
                <TableRowColumn>{moment(grade.startDate).format("MMM DD, YYYY")}</TableRowColumn>
                <TableRowColumn>{grade.endDate ? moment().format("MMM DD, YYYY") : ""}</TableRowColumn>
                <TableRowColumn style={{width:'300px'}}>
                    <IconButton value={grade.id} onClick={() => this.handleEdit(grade.id)}>
                        <Edit/>
                    </IconButton>
                    <IconButton value={grade.id}>
                        <Delete/>
                    </IconButton>
                </TableRowColumn>
            </TableRow>

        const editMode = (grade, i) =>
            <TableRow key={i}>
                <TableRowColumn>
                    <TextValidator hintText="DS"
                        name="ds"
                        validators={['required']}
                        errorMessages={['ds is required']}
                        value={grade.ds} />
                </TableRowColumn>
                <TableRowColumn >
                    <SelectValidator hintText= "Grade"
                        name="grade"
                        validators={['required']}
                        errorMessages={['grade is required']}
                        value={grade.gradeID}
                        style={{verticalAlign: 'bottom'}}>
                            <MenuItem value={"JP"} primaryText="Junior Programmer" />
                            <MenuItem value={"PG"} primaryText="Programmer" />
                            <MenuItem value={"AP"} primaryText="Analyst Programmer" />
                            <MenuItem value={"AN"} primaryText="Analyst" />
                    </SelectValidator>
                </TableRowColumn>
                <TableRowColumn >
                    <DateValidator hintText="Start Date"
                        name="startDate"
                        validators={['required']}
                        errorMessages={['start date is required']}
                        mode="landscape"
                        value={convertToDate(grade.startDate)}/>
                </TableRowColumn>
                <TableRowColumn >
                    <DateValidator hintText="End Date"
                        name="endDate"
                        mode="landscape"
                        value={grade.endDate}/>
                </TableRowColumn>
                <TableRowColumn style={{width:'300px'}}>
                    <IconButton type="submit">
                        <Save/>
                    </IconButton>
                    <IconButton value={grade.id}>
                        <Cancel/>
                    </IconButton>
                </TableRowColumn>
            </TableRow>

        const convertToDate = (date) => new Date(date)

        const floatingButtonStyle = {
            position: 'absolute',
            bottom: '0',
            right: '10%',
        }

        return (
            <div>
                <FloatingActionButton style={floatingButtonStyle}>
                    <ContentAdd />
                </FloatingActionButton>
                <ValidatorForm ref="form"
                                onSubmit={() =>this.handleSave()}>
                { this.state.grades && this.state.grades.length>0 ?
                    (
                        <Table  selectable={false}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>DS</TableHeaderColumn>
                                    <TableHeaderColumn>Grade</TableHeaderColumn>
                                    <TableHeaderColumn>Start Date</TableHeaderColumn>
                                    <TableHeaderColumn>End Date</TableHeaderColumn>
                                    <TableHeaderColumn style={{width:'300px'}}>Actions</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {
                                    this.state.grades.map((grade, i) => grade.editMode ? editMode(grade, i) : readOnly(grade, i))
                                }
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="no-record">
                            <span>No Grades Record Found</span>
                        </div>
                    )
                }
                </ValidatorForm>
            </div>
        )
    }

}

GradeListComponent.defaultProps = {
    grades: []
}

export default GradeListComponent