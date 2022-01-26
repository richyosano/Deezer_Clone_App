import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as ArtistInfo from './ArtistInfo';

const createRootReducer = (history) =>
	combineReducers({
		router: connectRouter(history),
		artistInfo: ArtistInfo.reducer,
	});

export default createRootReducer;
