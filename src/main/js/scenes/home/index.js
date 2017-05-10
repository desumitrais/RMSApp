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
import Grade from 'material-ui/svg-icons/action/assignment';
import Place from 'material-ui/svg-icons/maps/place';

import EmployeeTabComponent from '../home/components/EmployeeList/components/employee-tab.component';
import EmployeeDetailContainer from '../home/components/EmployeeDetail/containers/employee-detail.container'
import FamilyListContainer from '../home/components/FamilyList/containers/family-list.container'
import GradeListContainer from '../home/components/GradeList/containers/grade-list.container'
import { Route, Link } from 'react-router-dom';
import appStore  from '../../store/app.store';
import { fetchEmployees } from '../../actions/employee-list.action';
import { Action } from '../../constants/employee.constant';

class HomeScreen extends React.Component {

	constructor(props) {
		super(props);
		this.state = {employees: [], attributes: [], pageSize: 2, links: {}};
        appStore.dispatch(fetchEmployees(props.savedSort, props.savedFilter));
	}   

    componentWillReceiveProps(nextProps) {
        appStore.dispatch(fetchEmployees(nextProps.savedSort, nextProps.savedFilter));
    }

    handleChange = (value) => {
        appStore.dispatch({
            type: Action.SET_SELECTED_TAB,
            payload: value
        })
    }

	render() {
        const styles = {
            tabContent: {
                boxShadow: '0px 1px 2px 0.1px #000000'
            }
        }
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
                        <div className="col-sm-4" style={{padding:'1px'}}>
                            <EmployeeTabComponent />
                        </div>
                        <div className="col-sm-8" style={{padding:'1px'}}>
                            <Tabs tabItemContainerStyle={{backgroundColor:"#5c6bc0"}} inkBarStyle={{backgroundColor:"#880e4f"}} value={this.props.selectedEmployeeTab} onChange={this.handleChange}>
                                <Tab value="detail" icon={<Person/>} containerElement={<Link to="/home/detail"/>}>
                                    <div className="panel-list-container" style={styles.tabContent}>
                                        <Route path="/home/detail" component={EmployeeDetailContainer}/>
                                    </div>
                                </Tab>
                                <Tab value="history" icon={<History />}/>
                                <Tab value="assignment" icon={<Grade />} containerElement={<Link to="/home/grade" />} >
                                    <div className="panel-list-container" style={styles.tabContent}>
                                        <Route path="/home/grade" component={GradeListContainer}/>
                                    </div>
                                </Tab>
                                <Tab value="family"icon={<Family />} containerElement={<Link to="/home/family"/>}>
                                    <div className="panel-list-container" style={styles.tabContent}>
                                        <Route path="/home/family" component={FamilyListContainer}/>
                                    </div>
                                </Tab>
                                <Tab value="home" icon={<Home />}/>
                                <Tab value="place" icon={<Place />}/>
                            </Tabs>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
		)
	}

}

export default HomeScreen;