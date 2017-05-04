import React from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';

class FamilyComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
            <div>
                <TableRowColumn>{this.props.family.firstName + " " + this.props.family.lastName}</TableRowColumn>
                <TableRowColumn>{this.props.family.genderStr}</TableRowColumn>
                <TableRowColumn>{moment(this.props.family.dob).format("MMM DD, YYYY")}</TableRowColumn>
                <TableRowColumn>{this.props.family.this.props.family}</TableRowColumn>
                <TableRowColumn>
                    <Checkbox
                        checked={this.props.family.recordStatusID === 1? true : false}
                    />
                </TableRowColumn>
                <TableRowColumn>
                    <Edit />
                    <Delete />
                </TableRowColumn>                
            </div>
        )
    }
}

export default FamilyComponent