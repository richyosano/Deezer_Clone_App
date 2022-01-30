import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export default function AlbumCard(props) {
	const { album, loading } = props;

	return (
		<>
			<Card sx={{ maxWidth: 250 }} elevation={0}>
				{loading ? (
					<Skeleton variant="rectangular" width="100%" sx={{ height: 230 }} />
				) : (
					<CardMedia
						component="img"
						image={album.cover_medium}
						alt={album.title}
						sx={{ width: '100%', height: '100%', borderRadius: 2 }}
					/>
				)}
			</Card>
			<Typography
				gutterBottom
				variant="body2"
				component="div"
				sx={{ marginTop: 2 }}
			>
				{loading ? <Skeleton animation="pulse" width="93%" /> : album.title}
			</Typography>
			<Typography variant="caption" color="text.secondary">
				{loading ? (
					<Skeleton animation="pulse" width="93%" />
				) : (
					new Date(album.release_date).getFullYear()
				)}
			</Typography>
		</>
	);
}
