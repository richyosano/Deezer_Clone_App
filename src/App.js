import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pages from './Pages';

const theme = createTheme();

const App = (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Pages {...props} />
		</ThemeProvider>
	);
};

export default App;
