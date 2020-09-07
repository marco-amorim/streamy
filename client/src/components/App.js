import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Routes from '../routes';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<Header />
				<Routes />
			</BrowserRouter>
		</div>
	);
};

export default App;
