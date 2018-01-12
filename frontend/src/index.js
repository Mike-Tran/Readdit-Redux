import React from 'react';
import ReactDOM from 'react-dom';
import './app/index.css';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {
	BrowserRouter as Router,
	Route, Switch,
} from 'react-router-dom'
import configureStore from './store/configureStore';
import NotFound from "./NotFound";

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/" component={App}/>
				<Route component={NotFound} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();

