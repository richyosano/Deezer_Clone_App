import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import makeStyles from '@mui/styles/makeStyles';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Fade from '@mui/material/Fade';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		'&:hover': {
			backgroundColor: 'default',
		},
		marginLeft: 0,
		width: 'auto',
		[theme.breakpoints.up('md')]: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(2),
			backgroundColor: '#f0f0f0',
		},
	},
	searchIcon: {
		width: theme.spacing(6),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.up('md')]: {
			width: theme.spacing(9),
			marginLeft: 0,
		},
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '100%',
		},
	},
	searchDiv: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
		marginTop: 6,
		marginBottom: 6,
		// height: 35,
	},
	searchDivDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
			width: '55%',
		},
	},
	searchButtonMobile: {
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	searchRoot: {
		backgroundColor: '#f1f1f1',
		'& $notchedOutline': {
			borderColor: 'transparent',
		},
		'&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline': {
			borderColor: '#ebebeb',
		},
		'&$cssFocused $notchedOutline': {
			backgroundColor: '#ffffff50',
			borderColor: 'transparent',
		},
		'&$disabled': {
			color: '#c9c9c9c2',
		},
	},
	disabled: {},
	cssFocused: {},
	error: {},
	notchedOutline: {},
	listboxRoot: {
		maxHeight: '50vh',
		paddingLeft: 0,
		overflowY: 'auto',
		[theme.breakpoints.up('md')]: {
			maxHeight: '80vh',
		},
	},
}));

function Search(props) {
	const classes = useStyles();
	const {
		topArtists,
		setSelectedArtist,
		mobileSearchOpen,
		setMobileSearchOpen,
	} = props;

	const AutoCompletePaper = (props) => {
		return <Paper elevation={2} {...props} />;
	};

	const history = useHistory();
	const handleArtistClicked = async (artist) => {
		if (artist === null) {
			return;
		}
		await setSelectedArtist(artist);
		history.push(`/artist/${artist.id}`);
	};

	const mobileSearch = mobileSearchOpen ? (
		<Fade in={mobileSearchOpen}>
			<div className={classes.searchDiv}>
				<Autocomplete
					id="search-autoComplete"
					freeSolo
					blurOnSelect
					openOnFocus
					PaperComponent={AutoCompletePaper}
					onChange={(event, newValue) => handleArtistClicked(newValue)}
					options={topArtists}
					getOptionLabel={(option) => option.name}
					renderOption={(props, option) => {
						return (
							<ListItem {...props}>
								<ListItemAvatar>
									<Avatar
										alt="Image"
										src={option.picture_medium}
										style={{
											marginRight: 16,
											width: 45,
											height: 45,
										}}
										loading="lazy"
									/>
								</ListItemAvatar>
								<ListItemText primary={option.name} secondary="Artist" />
							</ListItem>
						);
					}}
					classes={{
						endAdornment: classes.endAdornment,
					}}
					renderInput={(params) => (
						<TextField
							{...params}
							fullWidth
							autoFocus
							onBlur={() => setMobileSearchOpen(false)}
							variant="outlined"
							size="small"
							placeholder="Search"
							InputProps={{
								...params.InputProps,
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon
											style={{
												marginLeft: 16,
												marginRight: 8,
											}}
										/>
									</InputAdornment>
								),
								classes: {
									root: classes.searchRoot,
									notchedOutline: classes.notchedOutline,
									error: classes.error,
									disabled: classes.disabled,
									focused: classes.cssFocused,
								},
							}}
						/>
					)}
				/>
			</div>
		</Fade>
	) : (
		<IconButton
			className={classes.searchButtonMobile}
			onClick={() => setMobileSearchOpen(true)}
			color="inherit"
		>
			<SearchIcon />
		</IconButton>
	);

	const desktopSearch = (
		<div
			className={classes.searchDivDesktop}
			style={{
				position: 'relative',
			}}
		>
			<Autocomplete
				id="search-autoComplete"
				freeSolo
				blurOnSelect
				PaperComponent={AutoCompletePaper}
				onChange={(event, newValue) => handleArtistClicked(newValue)}
				options={topArtists}
				getOptionLabel={(option) => option.name}
				renderOption={(props, option) => {
					return (
						<ListItem {...props}>
							<ListItemAvatar>
								<Avatar
									alt="Image"
									src={option.picture_medium}
									style={{
										marginRight: 16,
										width: 45,
										height: 45,
									}}
									loading="lazy"
								/>
							</ListItemAvatar>
							<ListItemText primary={option.name} secondary="Artist" />
						</ListItem>
					);
				}}
				renderInput={(params) => (
					<TextField
						{...params}
						fullWidth
						variant="outlined"
						size="small"
						placeholder="Search"
						InputProps={{
							...params.InputProps,
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon
										style={{
											marginLeft: 10,
											marginRight: 8,
										}}
									/>
								</InputAdornment>
							),
							classes: {
								root: classes.searchRoot,
								notchedOutline: classes.notchedOutline,
								error: classes.error,
								disabled: classes.disabled,
								focused: classes.cssFocused,
							},
						}}
					/>
				)}
			/>
		</div>
	);

	return (
		<React.Fragment>
			{desktopSearch}
			{mobileSearch}
		</React.Fragment>
	);
}

export default Search;
