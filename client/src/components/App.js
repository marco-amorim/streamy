import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import Routes from '../Routes';

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
