import * as React from 'react';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { artistInfoActionCreators } from '../store/ArtistInfo';
import { bindActionCreators } from 'redux';
import ArtistView from '../components/selectedArtistView';
import AlbumCard from '../components/AlbumCard';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

function ArtistPage(props) {
	const {
		artistInfo,
		getArtistInfo,
		artistTopTracks,
		getArtistTopTracks,
		artistInfoLoading,
		artistAlbums,
		getArtistAlbums,
		selectedArtist,
	} = props;
	const params = useParams();

	React.useEffect(() => {
		getArtistInfo(params.artistId);
		getArtistTopTracks(params.artistId);
		getArtistAlbums(params.artistId);
	}, [params.artistId]);

	return (
		<Container sx={{ padding: 4 }}>
			{artistInfo && (
				<ArtistView
					artist={artistInfo}
					artistTopTracks={artistTopTracks}
					artistInfoLoading={artistInfoLoading}
				/>
			)}
			<Divider sx={{ fontWeight: 500, marginTop: 6 }} />
			<Typography
				gutterBottom
				variant="h6"
				component="div"
				sx={{ fontWeight: 500, marginTop: 2, marginBottom: 2 }}
			>
				Albums
			</Typography>
			<Grid container spacing={3} justifyContent="flex-start">
				{artistAlbums.map((album) => (
					<Grid item xs={6} sm={4} md={3}>
						{' '}
						<AlbumCard album={album} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		...state.artistInfo,
	};
};
const dispatcher = (dispatch) =>
	bindActionCreators(
		Object.assign({}, { push: push }, artistInfoActionCreators),
		dispatch
	);
const reduxConnected = connect(mapStateToProps, dispatcher)(ArtistPage);

export default withRouter(reduxConnected);
