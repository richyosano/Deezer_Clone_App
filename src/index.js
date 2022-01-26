import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store/configureStore';

const initialState = window.initialReduxState;
const store = configureStore(initialState);

const APP = (
	<StyledEngineProvider injectFirst>
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Route component={App} />
			</ConnectedRouter>
		</Provider>
	</StyledEngineProvider>
);

ReactDOM.render(APP, document.querySelector('#root'));
