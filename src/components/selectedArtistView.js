import * as React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import makeStyles from '@mui/styles/makeStyles';
import ArtistTopTracks from './ArtistTopTracks';
import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	artistNameGrid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.up('md')]: {
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
	},
	artistFansText: {
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'unset',
		},
	},
}));

export default function ArtistView(props) {
	const { artist, artistTopTracks, artistInfoLoading } = props;
	const classes = useStyles();

	return (
		<Grid container spacing={3}>
			<Grid
				item
				xs={12}
				md={3}
				sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
			>
				{artistInfoLoading ? (
					<Skeleton animation="wave" variant="circular">
						<Avatar
							src={artist.picture_medium}
							sx={{
								width: '100%',
								height: '100%',
								maxWidth: 240,
								maxHeight: 240,
							}}
						/>
					</Skeleton>
				) : (
					<Avatar
						src={artist.picture_medium}
						alt={artist.name}
						sx={{
							width: '100%',
							height: '100%',
							maxWidth: 240,
							maxHeight: 240,
						}}
					/>
				)}
			</Grid>
			<Grid item xs={12} md={3} className={classes.artistNameGrid}>
				<div>
					<Typography
						gutterBottom
						variant="h4"
						component="div"
						sx={{ fontWeight: 500 }}
					>
						{artistInfoLoading ? <Skeleton animation="wave" /> : artist.name}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						className={classes.artistFansText}
					>
						{artistInfoLoading ? (
							<Skeleton animation="wave" />
						) : (
							Number(artist.nb_fan).toLocaleString()
						)}{' '}
						fans
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} md={6}>
				<ArtistTopTracks artistTopTracks={artistTopTracks} />
			</Grid>
		</Grid>
	);
}
