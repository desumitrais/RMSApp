import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {indigo500, indigo400, white} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ActionPowerSettingsNew from 'material-ui/svg-icons/action/power-settings-new';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Tabs, Tab} from 'material-ui/Tabs';
import Person from 'material-ui/svg-icons/social/person';
import Family from 'material-ui/svg-icons/notification/wc';
import History from 'material-ui/svg-icons/action/history';
import Home from 'material-ui/svg-icons/action/home';
import Assignment from 'material-ui/svg-icons/action/assignment';
import Place from 'material-ui/svg-icons/maps/place';

import EmployeeListContainer from '../home/components/EmployeeList/containers/employee-list.container';
import EmployeeDetailContainer from '../home/components/EmployeeDetail/containers/employee-detail.container'

class HomeScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: [], attributes: [], pageSize: 2, links: {}};
	}

	render() {
		return (
			<div>
                <MuiThemeProvider>
                    <AppBar
                        iconElementRight={
                            <div>
                                <IconButton tooltip="Setting"><ActionSettings color={white} /></IconButton>
                                <IconButton tooltip="Logout"><ActionPowerSettingsNew color={white} /></IconButton>
                            </div>
                        }
                    />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <div className="panel-container">
                        <div className="col-sm-4">
                            <EmployeeListContainer />
                        </div>
                        <div className="col-sm-8">
                            <Tabs tabItemContainerStyle={{backgroundColor:"#5c6bc0"}} inkBarStyle={{backgroundColor:"#880e4f"}} >
                                <Tab icon={<Person/>}>
                                    <EmployeeDetailContainer/>
                                </Tab>
                                <Tab icon={<History />} />
                                <Tab icon={<Assignment />} />
                                <Tab icon={<Family />} />
                                <Tab icon={<Home />} />
                                <Tab icon={<Place />} />
                            </Tabs>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
		)
	}

}

export default HomeScreen;