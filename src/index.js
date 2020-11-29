import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/app.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
