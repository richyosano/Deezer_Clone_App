import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
	const store = createStore(
		createRootReducer(history),
		initialState,
		compose(applyMiddleware(thunk, routerMiddleware(history)))
	);

	return store;
}
