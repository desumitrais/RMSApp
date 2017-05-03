import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import moment from 'moment';

class EmployeeDetailComponent extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            this.props.selectedEmployee && this.props.selectedEmployee.firstName ? (
                <div>
                    <div className="col-xs-5">
                        <List >
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>First Name</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.firstName}</div>}/>
                            <Divider />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Last Name</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.lastName}</div>}/>
                            <Divider  />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Gender</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.genderStr}</div>}/>
                            <Divider />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Date of Birth</div>} secondaryText={<div style={{fontSize:'16px'}}>{moment(this.props.selectedEmployee.dob).format("DD MMM YYYY")}</div>}/>
                            <Divider  />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Nationality</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.nationalityStr}</div>}/>
                            <Divider />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Marital Status</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.maritalStatusStr}</div>}/>
                            <Divider  />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Phone</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.phone}</div>}/>
                            <Divider  />
                        </List>
                    </div>
                    <div className="col-xs-5">
                        <List>
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Sub Division</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.subDivisionStr}</div>}/>
                            <Divider />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Status</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.statusStr}</div>}/>
                            <Divider  />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Suspend Date</div>} secondaryText={<div style={{fontSize:'16px'}}>{moment(this.props.selectedEmployee.suspendDate).format("DD MMM YYYY")}</div>}/>
                            <Divider />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Hired Date</div>} secondaryText={<div style={{fontSize:'16px'}}>{moment(this.props.selectedEmployee.hireDate).format("DD MMM YYYY")}</div>}/>
                            <Divider  />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Grade</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.gradeStr}</div>}/>
                            <Divider />
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Division</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.divisionStr}</div>}/>
                            <Divider  />    
                            <ListItem  disabled={true} primaryText={<div style={{fontSize:'12px'}}>Email</div>} secondaryText={<div style={{fontSize:'16px'}}>{this.props.selectedEmployee.email}</div>}/>
                            <Divider />
                        </List>
                    </div>
                </div> 
            ) : (<div></div>)
		)
	}
}

export default EmployeeDetailComponent;