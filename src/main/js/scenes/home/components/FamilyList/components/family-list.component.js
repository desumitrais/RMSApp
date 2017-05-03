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
import moment from 'moment';
import appStore  from '../../../../../store/app.store';
import { fetchFamilyList } from '../../../../../actions/family-list.action';

class FamilyListComponent extends React.Component {

	constructor(props) {
		super(props);
    console.log("rererre",props.selectedEmployee.id);
	}

  componentWillReceiveProps(nextProps) {
    console.log("rererre2",nextProps);
  }

  componentDidMount(nextProps) {
    console.log("rererre3",nextProps);
    appStore.dispatch(fetchFamilyList(this.props.selectedEmployee.id));
  }

	render() {
		return (
			<div>
          { this.props.families && this.props.families.length>0 ? (
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Gender</TableHeaderColumn>
                        <TableHeaderColumn>DOB</TableHeaderColumn>
                        <TableHeaderColumn>Type</TableHeaderColumn>
                        <TableHeaderColumn>Active</TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                <TableBody displayRowCheckbox={false}>
                {
                  this.props.families.map((family,i) =>
                      <TableRow>
                        <TableRowColumn>{family.firstName + " " + family.lastName}</TableRowColumn>
                        <TableRowColumn>{family.genderStr}</TableRowColumn>
                        <TableRowColumn>{moment(family.dob).format("MMM DD, YYYY")}</TableRowColumn>
                        <TableRowColumn>{family.familyTypeStr}</TableRowColumn>
                        <TableRowColumn>{family.recordStatusID}</TableRowColumn>
                      </TableRow>   
                  )
                }
                </TableBody>
                </Table>
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

export default FamilyListComponent;