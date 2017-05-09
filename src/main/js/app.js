'use strict';

const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');
import HomeScreenContainer from './scenes/home/containers/home.container';
import Whoops404 from './scenes/error/404.component';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import appStore from './store/app.store';
import { HashRouter as Router, Switch , Route, Redirect, Link, match} from 'react-router-dom';

const follow = require('./follow'); // function to hop multiple links by "rel"

const root = '/api';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/" render={() => (
							this.loggedIn ? (
								<Redirect to="/home"/>
							) : (
								<Redirect to="/home"/> ))}/>
						<Route path="/home" component={HomeScreenContainer}/>
						<Route component={Whoops404} />
					</Switch>
				</div>
			</Router>
		)
	}
}

injectTapEventPlugin();

ReactDOM.render(
	<Provider store={appStore}>
		<App />
	</Provider>,
	document.getElementById('react')
)
