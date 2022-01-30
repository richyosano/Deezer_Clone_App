import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import CardActionArea from '@mui/material/CardActionArea';

export default function ArtistCard(props) {
	const { artist, handleClicked } = props;
	const [imageLoaded, setImageLoaded] = React.useState(false);

	return (
		<Card sx={{ maxWidth: 345 }} variant="outlined">
			<CardActionArea onClick={handleClicked}>
				{!imageLoaded && (
					<Skeleton variant="rectangular" width="100%" sx={{ height: 238 }} />
				)}
				<CardMedia
					component="img"
					image={artist.picture_medium}
					alt={artist.name}
					sx={{
						width: '100%',
						height: '100%',
						display: imageLoaded ? 'unset' : 'none',
					}}
					onLoad={() => setImageLoaded(true)}
				/>

				<CardContent>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{ fontWeight: 500 }}
					>
						{artist.name}
					</Typography>
					<Typography variant="caption" color="text.secondary">
						{Number(artist.nb_fan).toLocaleString()} fans
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
