import React from 'react';
import ReactDOM from 'react-dom';
import {ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import RadioButtonCheckedIcon from 'material-ui/svg-icons/toggle/radio-button-checked';
import moment from 'moment';
import appStore  from '../../../../../store/app.store';
import { Action } from '../../../../../constants/employee.constant';
import { withRouter } from 'react-router-dom';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';

class Employee extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.onClick = this.onClick.bind(this);
	}

	handleDelete() {
		//this.props.onDelete(this.props.employee);
	}

	onClick() {
		appStore.dispatch({
			type: Action.SET_SELECTED_EMPLOYEE,
			payload: this.props.employee
		});
		appStore.dispatch({
            type: Action.SET_SELECTED_TAB,
            payload: 'detail'
        })
		this.props.history.push('/home/detail');
	}

	render() {
		const primaryText = <div style={{paddingLeft: "10px", paddingTop:"5px"}}> 
			<div className="row">
				<div className="col-xs-9">
					{this.props.employee.firstName + " " + this.props.employee.lastName}
				</div>
				<div className="col-xs-3" style={{textAlign: 'center'}}>
					<span>{moment(this.props.employee.hireDate).format("DD MMM YYYY")}</span>
				</div>
			</div>
		</div>;
		const secondaryText = <div style={{paddingLeft: "10px"}}> 
			<div className="row">
				<div className="col-xs-9">
					<div className="row">
						<div className="col-xs-12">
							{this.props.employee.email}
						</div>
						<div className="col-xs-12">
							{ this.props.employee.phone + ", " + this.props.employee.phone}
						</div>
					</div>
				</div>
				<div className="col-xs-3" style={{textAlign: 'center'}}>					
					<RadioButtonCheckedIcon color={'#3f51b5'}></RadioButtonCheckedIcon>
				</div>
			</div>
		</div>;
		return (
			<ListItem 
				leftAvatar={<Avatar src="images/ok-128.jpg" size={60}/>}
				primaryText={primaryText}
				secondaryText={secondaryText}
				secondaryTextLines={2}
				onTouchTap={this.onClick}>
			</ListItem>
		)
	}
}

export default withRouter(Employee);