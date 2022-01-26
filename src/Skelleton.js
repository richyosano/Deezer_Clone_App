import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Search from './components/search';
import Divider from '@mui/material/Divider';
import ArtistCard from './components/ArtistCard';
import Grid from '@mui/material/Grid';

function ElevationScroll(props) {
	const { children } = props;
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
		// target: window ? window() : undefined,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 0 : 0,
	});
}

function Skelleton(props) {
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
						<img
							alt="Deezer"
							src="/Deezer-Logo.wine.png"
							style={{ width: 130, marginRight: 50 }}
						/>
						<Search topArtists={topArtists} />
					</Toolbar>
					<Divider />
				</AppBar>
			</ElevationScroll>

			<Toolbar />
			<Container sx={{ padding: 4 }}>
				<Grid container spacing={4}>
					{topArtists.map((artist) => (
						<Grid item xs={12} sm={6} md={3}>
							<ArtistCard
								name={artist.name}
								fans={artist.fans}
								imageUrl={artist.imageUrl}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
}

const topArtists = [
	{
		name: 'Adele',
		fans: 12086720,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/e5fc443d2abc03b487234ba4de65a001/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Beyoncé',
		fans: 10763644,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Camila Cabello',
		fans: 3225810,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/3812bbda41f9253eec3b6580ae7b6fce/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Drake',
		fans: 21597712,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/5d2fa7f140a6bdc2c864c3465a61fc71/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Ed Sheeran',
		fans: 17656493,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/9c919fc0d8b2964ed63061f5bfa5a11f/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Fireboy Dml',
		fans: 209097,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/816e7dc6e0a1520f537256ccad521921/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Gwen Stefani',
		fans: 932957,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/ade3fef9cea984f26d9c893d31f9c469/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Harry Styles',
		fans: 1158036,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/58327a7b9ad26d0d4f948f7fc36c6c8b/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Iggy Azalea',
		fans: 3234328,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/dc5a670021e63d1ab385075cf757e2dc/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Jennifer Lopez',
		fans: 5698484,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/2fa1c95948cf111e38aed58b64b49556/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Khalid',
		fans: 1456389,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/0a583310e16929d26a6123a57f46786d/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Lady Gaga',
		fans: 6768977,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/de53e52fddf43850e6eff3d9f292d6c8/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Michael Jackson',
		fans: 10058795,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/86b13342a65ffe06fa151ce353a7b278/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Nicki Minaj',
		fans: 6469899,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/a5693f3760b4543cf084c6330328b780/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Olivia Rodrigo',
		fans: 618747,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/7e2efcc3fdbfaaed13b07d8c87929615/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Post Malone',
		fans: 3132183,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/718942059d7b35b22a40da0d23554e8d/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Quavo',
		fans: 483216,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/a56fff80e69f1ecda00e8e4d1335f260/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Rihanna',
		fans: 14842792,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/7d514d87a45a59d6094e028d750f3039/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Summer Walker',
		fans: 345586,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/07bd402b3e05b0fc0db54dcd045d2ddc/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Tems',
		fans: 84531,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/977218a5c3ec725e6fdfc2d1a819acf8/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Usher',
		fans: 6512069,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/b1df32ef291e7a09cedcb7aa394c60fe/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Vybz Kartel',
		fans: 978003,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/f7b3120a56baee2381d61054658d6077/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Wizkid',
		fans: 741104,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/0a5d34bab78b51067698dd51767154aa/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'XXXTentacion',
		fans: 3311083,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/62e6edfaf5461eeb5b7310903229607a/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Yemi Alade',
		fans: 360586,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/b4a5ad880f600fa7e1cfe0ee6269083d/264x264-000000-80-0-0.jpg',
	},
	{
		name: 'Zayn',
		fans: 2393109,
		imageUrl:
			'https://e-cdn-images.dzcdn.net/images/artist/324d472dbe44161377caefcff8276ce5/264x264-000000-80-0-0.jpg',
	},
];

export default Skelleton;
