import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AlbumCard(props) {
	const { album } = props;

	return (
		<>
			<Card sx={{ maxWidth: 250 }} elevation={0}>
				<CardMedia
					component="img"
					image={album.cover_medium}
					alt={album.title}
					sx={{ width: '100%', height: '100%', borderRadius: 2 }}
				/>
			</Card>
			<Typography
				gutterBottom
				variant="body2"
				component="div"
				sx={{ marginTop: 2 }}
			>
				{album.title}
			</Typography>
			<Typography variant="caption" color="text.secondary">
				{new Date(album.release_date).getFullYear()}
			</Typography>
		</>
	);
}
