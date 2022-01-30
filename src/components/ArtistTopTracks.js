import * as React from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AudioTrackIcon from '@mui/icons-material/Audiotrack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteFilledIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import makeStyles from '@mui/styles/makeStyles';
import Skeleton from '@mui/material/Skeleton';

const useStyles = makeStyles((theme) => ({
	lightTooltip: {
		backgroundColor: theme.palette.common.white,
		color: 'rgba(0, 0, 0, 0.87)',
		boxShadow: theme.shadows[1],
		fontSize: 11,
	},
}));

export default function ArtistTopTracks(props) {
	const classes = useStyles();
	const secondsToTime = (seconds) => {
		var m = Math.floor((seconds % 3600) / 60)
				.toString()
				.padStart(2, '0'),
			s = Math.floor(seconds % 60)
				.toString()
				.padStart(2, '0');

		return m + ':' + s;
	};
	const { artistTopTracks, artistTopTracksLoading } = props;
	const loading = artistTopTracks.length === 0 || artistTopTracksLoading;
	const listToDisplay = loading ? [...new Array(5)] : artistTopTracks;

	return (
		<Paper
			sx={{
				width: '100%',
				padding: 2,
				marginTop: 5,
				backgroundColor: '#f1f1f185',
			}}
			elevation={0}
		>
			<Typography
				gutterBottom
				variant="h6"
				component="div"
				sx={{ fontWeight: 500, marginLeft: 1 }}
			>
				Top Tracks
			</Typography>
			<List>
				{listToDisplay.map((track) => (
					<>
						<ListItem
							disablePadding
							secondaryAction={
								<Tooltip
									title="Add to favorites"
									classes={{
										tooltip: classes.lightTooltip,
									}}
									placement="right"
								>
									<Checkbox
										disableRipple
										disabled={loading}
										icon={<FavoriteBorderIcon />}
										checkedIcon={
											<FavoriteFilledIcon
												style={{
													color: '#e57373',
												}}
											/>
										}
									/>
								</Tooltip>
							}
						>
							<ListItemButton>
								<ListItemIcon>
									<AudioTrackIcon />
								</ListItemIcon>
								<ListItemText
									primary={
										<Typography variant="body2">
											{loading ? (
												<Skeleton animation="pulse" width="95%" />
											) : (
												track.title
											)}
										</Typography>
									}
									secondary={
										<Typography variant="caption" color="text.secondary">
											{loading ? (
												<Skeleton animation="pulse" width="95%" />
											) : (
												secondsToTime(track.duration)
											)}
										</Typography>
									}
								/>
							</ListItemButton>
						</ListItem>
						<Divider variant="middle" />
					</>
				))}
			</List>
		</Paper>
	);
}
