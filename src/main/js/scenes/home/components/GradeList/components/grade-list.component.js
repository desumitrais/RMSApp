import React from 'react';
import ReactDOM from 'react-dom';

import moment from 'moment';
import appStore  from '../../../../../store/app.store';
import { fetchGradeList } from '../../../../../actions/grade-list.action';

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
import ContentAdd from 'material-ui/svg-icons/content/add';

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

    render() {
        const readOnly = (grade, i) =>
            <TableRow key={i}>
                <TableRowColumn style={{width:'300px'}}>{grade.ds}</TableRowColumn>
                <TableRowColumn>{grade.gradeID}</TableRowColumn>
                <TableRowColumn>{moment(grade.startDate).format("MMM DD, YYYY")}</TableRowColumn>
                <TableRowColumn>{moment(grade.endDate).format("MMM DD, YYYY")}</TableRowColumn>
                <TableRowColumn>
                    <IconButton value={grade.id}>
                        <Delete/>
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
                { this.state.grades && this.state.grades.length>0 ?
                    (
                        <Table  selectable={false}>
                            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn style={{width:'300px'}}>DS</TableHeaderColumn>
                                    <TableHeaderColumn>Grade</TableHeaderColumn>
                                    <TableHeaderColumn>Start Date</TableHeaderColumn>
                                    <TableHeaderColumn>End Date</TableHeaderColumn>
                                    <TableHeaderColumn>Actions</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                {
                                    this.state.grades.map((grade, i) => readOnly(grade, i))
                                }
                            </TableBody>
                        </Table>
                    ) : (
                        <div className="no-record">
                            <span>No Grades Record Found</span>
                        </div>
                    )
                }
            </div>
        )
    }

}

GradeListComponent.defaultProps = {
    grades: []
}

export default GradeListComponent