import * as React from 'react';
import Container from '@mui/material/Container';
import ArtistCard from '../components/ArtistCard';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';

function HomePage(props) {
	const { topArtists, setSelectedArtist } = props;
	const history = useHistory();
	const handleArtistClicked = async (artist) => {
		await setSelectedArtist(artist);
		history.push(`/artist/${artist.id}`);
	};

	return (
		<Container sx={{ padding: 4 }}>
			<Grid container spacing={4}>
				{topArtists.map((artist) => (
					<Grid item xs={12} sm={6} md={3}>
						<ArtistCard
							artist={artist}
							handleClicked={() => handleArtistClicked(artist)}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}

export default HomePage;
