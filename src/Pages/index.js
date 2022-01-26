import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Search from '../components/search';
import Divider from '@mui/material/Divider';
import HomePage from './Home';
import { Switch, Route, useHistory } from 'react-router-dom';
import ArtistPage from './ArtistPage';
import { Hidden } from '@mui/material';

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 0 : 0,
	});
}

function Skelleton(props) {
	const [selectedArtist, setSelectedArtist] = React.useState(null);
	const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

	const history = useHistory();
	const handleLogoClicked = () => {
		setSelectedArtist(null);
		history.push('/');
	};

	return (
		<React.Fragment>
			<CssBaseline />
			<ElevationScroll {...props}>
				<AppBar
					color="inherit"
					style={{
						backgroundColor: '#ffffffb8',
						backdropFilter: 'blur(6px)',
					}}
				>
					<Toolbar>
						{!mobileSearchOpen && (
							<>
								<img
									alt="Deezer"
									src="/Deezer-Logo.wine.png"
									style={{ width: 130, marginRight: 50, cursor: 'pointer' }}
									onClick={handleLogoClicked}
								/>
								<Hidden mdUp>
									<div style={{ flexGrow: 1 }} />
								</Hidden>
							</>
						)}
						<Search
							topArtists={topArtists}
							setSelectedArtist={setSelectedArtist}
							mobileSearchOpen={mobileSearchOpen}
							setMobileSearchOpen={setMobileSearchOpen}
						/>
					</Toolbar>
					<Divider />
				</AppBar>
			</ElevationScroll>

			<Toolbar />
			<Switch>
				<Route
					exact
					path="/"
					render={(props) => {
						return (
							<HomePage
								selectedArtist={selectedArtist}
								topArtists={topArtists}
								setSelectedArtist={setSelectedArtist}
								setMobileSearchOpen={setMobileSearchOpen}
								{...props}
							/>
						);
					}}
				/>
				<Route
					path="/artist/:artistId"
					render={(props) => {
						return (
							<ArtistPage
								selectedArtist={selectedArtist}
								topArtists={topArtists}
								setSelectedArtist={setSelectedArtist}
								{...props}
							/>
						);
					}}
				/>
			</Switch>
		</React.Fragment>
	);
}

const topArtists = [
	{
		name: 'Adele',
		id: 75798,
		nb_fan: 12086720,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Beyoncé',
		id: 145,
		nb_fan: 10763644,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Camila Cabello',
		id: 9236850,
		nb_fan: 3225810,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/3812bbda41f9253eec3b6580ae7b6fce/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Drake',
		id: 246791,
		nb_fan: 21597712,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Ed Sheeran',
		id: 384236,
		nb_fan: 17656493,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Fireboy Dml',
		id: 15190997,
		nb_fan: 209097,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/816e7dc6e0a1520f537256ccad521921/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Gwen Stefani',
		id: 16,
		nb_fan: 932957,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/ade3fef9cea984f26d9c893d31f9c469/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Harry Styles',
		id: 5313805,
		nb_fan: 1158036,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/58327a7b9ad26d0d4f948f7fc36c6c8b/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Iggy Azalea',
		id: 2454271,
		nb_fan: 3234328,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/dc5a670021e63d1ab385075cf757e2dc/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Jennifer Lopez',
		id: 45,
		nb_fan: 5698484,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/2fa1c95948cf111e38aed58b64b49556/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Khalid',
		id: 362326,
		nb_fan: 1456389,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/0a583310e16929d26a6123a57f46786d/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Lady Gaga',
		id: 75491,
		nb_fan: 6768977,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/de53e52fddf43850e6eff3d9f292d6c8/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Michael Jackson',
		id: 259,
		nb_fan: 10058795,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/86b13342a65ffe06fa151ce353a7b278/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Nicki Minaj',
		id: 382937,
		nb_fan: 6469899,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/a5693f3760b4543cf084c6330328b780/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Olivia Rodrigo',
		id: 11152580,
		nb_fan: 618747,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Post Malone',
		id: 7543848,
		nb_fan: 3132183,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/718942059d7b35b22a40da0d23554e8d/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Quavo',
		id: 5059044,
		nb_fan: 483216,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/a56fff80e69f1ecda00e8e4d1335f260/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Rihanna',
		id: 564,
		nb_fan: 14842792,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/7d514d87a45a59d6094e028d750f3039/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Summer Walker',
		id: 14482665,
		nb_fan: 345586,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Tems',
		id: 13905711,
		nb_fan: 84531,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/977218a5c3ec725e6fdfc2d1a819acf8/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Usher',
		id: 17,
		nb_fan: 6512069,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/b1df32ef291e7a09cedcb7aa394c60fe/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Vybz Kartel',
		id: 100675,
		nb_fan: 978003,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/f7b3120a56baee2381d61054658d6077/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Wizkid',
		id: 3933641,
		nb_fan: 741104,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/0a5d34bab78b51067698dd51767154aa/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'XXXTentacion',
		id: 9822974,
		nb_fan: 3311083,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/62e6edfaf5461eeb5b7310903229607a/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Yemi Alade',
		id: 4694728,
		nb_fan: 360586,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/b4a5ad880f600fa7e1cfe0ee6269083d/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Zayn',
		id: 9761322,
		nb_fan: 2393109,
		picture_medium:
			'https://e-cdn-images.dzcdn.net/images/artist/324d472dbe44161377caefcff8276ce5/264x264-000000-80-0-0.jpg',
	},
];

export default Skelleton;
