import React from 'react';
import ReactDOM from 'react-dom';
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import RadioButtonCheckedIcon from 'material-ui/svg-icons/toggle/radio-button-checked';

class Employee extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete() {
		//this.props.onDelete(this.props.employee);
	}

	render() {
		const abc = <div>
			<div className="row">
				<div className="col-xs-10"></div>
				<div className="col-xs-2"></div>
			</div>
		</div>
		return (
			<ListItem 
				leftAvatar={<Avatar src="images/ok-128.jpg" />}
				primaryText={this.props.firstName + "" + this.props.lastName}
				secondaryText={this.props.description}>
			</ListItem>
		)
	}
}

export default Employee;