'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
const RaisedButton = require('material-ui/RaisedButton').default;
const AppBar = require('material-ui/AppBar').default;
const IconButton = require('material-ui/IconButton').default;
const ActionSettings = require('material-ui/svg-icons/action/settings').default;
const ActionPowerSettingsNew = require('material-ui/svg-icons/action/power-settings-new').default;


class RMSBarComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
			    <MuiThemeProvider>
                    <AppBar
                        iconElementRight={<IconButton tooltip="Setting"><ActionSettings /></IconButton>, <IconButton tooltip="Logout"><ActionPowerSettingsNew /></IconButton>}
                    />
                </MuiThemeProvider>
			</div>
		)
	}

}

module.exports = RMSBarComponent;