const requestArtistInfoType = 'REQUEST_ARTIST_INFO';
const receiveArtistInfoType = 'RECEIVE_ARTIST_INFO';
const receiveArtistInfoErrorType = 'RECEIVE_ARTIST_INFO_ERROR';

const requestArtistTopTracksType = 'REQUEST_ARTIST_TOP_TRACKS';
const receiveArtistTopTracksType = 'RECEIVE_ARTIST_TOP_TRACKS';
const receiveArtistTopTracksErrorType = 'RECEIVE_ARTIST_TOP_TRACKS_ERROR';

const requestArtistAlbumsType = 'REQUEST_ARTIST_ALBUMS';
const receiveArtistAlbumsType = 'RECEIVE_ARTIST_ALBUMS';
const receiveArtistAlbumsErrorType = 'RECEIVE_ARTIST_ALBUMS_ERROR';

const initialState = {
	artistInfo: null,
	artistInfoLoading: false,
	artistInfoError: false,
	artistTopTracks: [],
	artistTopTracksLoading: false,
	artistTopTracksError: false,
	artistAlbums: [],
	artistAlbumsLoading: false,
	artistAlbumsError: false,
};

const baseUrl = 'https://cors-anywhere.herokuapp.com/';

export const artistInfoActionCreators = {
	getArtistInfo: (artistId) => async (dispatch, getState) => {
		if (getState().artistInfo.artistInfoLoading) {
			return;
		}

		dispatch({ type: requestArtistInfoType });

		const url = new URL(`api.deezer.com/artist/${artistId}`, baseUrl);

		try {
			const Response = await fetch(url);

			if (Response.ok) {
				const artistInfoData = await Response.json();
				dispatch({
					type: receiveArtistInfoType,
					artistInfo: artistInfoData,
				});
			} else {
				dispatch({ type: receiveArtistInfoErrorType });
			}
		} catch (err) {
			dispatch({ type: receiveArtistInfoErrorType });
		}
	},

	getArtistTopTracks: (artistId) => async (dispatch, getState) => {
		if (getState().artistInfo.artistTopTracksLoading) {
			return;
		}

		dispatch({ type: requestArtistTopTracksType });

		const url = new URL(`api.deezer.com/artist/${artistId}/top`, baseUrl);

		try {
			const Response = await fetch(url);

			if (Response.ok) {
				const topTracks = await Response.json();
				dispatch({
					type: receiveArtistTopTracksType,
					artistTopTracks: topTracks.data,
				});
			} else {
				dispatch({ type: receiveArtistTopTracksErrorType });
			}
		} catch (err) {
			dispatch({ type: receiveArtistTopTracksErrorType });
		}
	},

	getArtistAlbums: (artistId) => async (dispatch, getState) => {
		if (getState().artistInfo.artistAlbumsLoading) {
			return;
		}

		dispatch({ type: requestArtistAlbumsType });

		const url = new URL(`api.deezer.com/artist/${artistId}/albums`, baseUrl);

		try {
			const Response = await fetch(url);

			if (Response.ok) {
				const Albums = await Response.json();
				dispatch({
					type: receiveArtistAlbumsType,
					artistAlbums: Albums.data,
				});
			} else {
				dispatch({ type: receiveArtistAlbumsErrorType });
			}
		} catch (err) {
			dispatch({ type: receiveArtistAlbumsErrorType });
		}
	},
};

export const reducer = (state, action) => {
	state = state || initialState;

	if (action.type === requestArtistInfoType) {
		return {
			...state,
			artistInfoLoading: true,
			artistInfoError: false,
		};
	}
	if (action.type === receiveArtistInfoType) {
		return {
			...state,
			artistInfo: action.artistInfo,
			artistInfoLoading: false,
		};
	}
	if (action.type === receiveArtistInfoErrorType) {
		return {
			...state,
			artistInfoLoading: false,
			artistInfoError: true,
		};
	}

	if (action.type === requestArtistTopTracksType) {
		return {
			...state,
			artistTopTracksLoading: true,
			artistTopTracksError: false,
		};
	}
	if (action.type === receiveArtistTopTracksType) {
		return {
			...state,
			artistTopTracks: action.artistTopTracks,
			artistTopTracksLoading: false,
		};
	}
	if (action.type === receiveArtistTopTracksErrorType) {
		return {
			...state,
			artistTopTracksLoading: false,
			artistTopTracksError: true,
		};
	}

	if (action.type === requestArtistAlbumsType) {
		return {
			...state,
			artistAlbumsLoading: true,
			artistAlbumsError: false,
		};
	}
	if (action.type === receiveArtistAlbumsType) {
		return {
			...state,
			artistAlbums: action.artistAlbums,
			artistAlbumsLoading: false,
		};
	}
	if (action.type === receiveArtistAlbumsErrorType) {
		return {
			...state,
			artistAlbumsLoading: false,
			artistAlbumsError: true,
		};
	}

	return state;
};
