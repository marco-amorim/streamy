import React, { Component } from 'react';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId:
					'910495003929-sttcuq7hg45sjg5o7c3hfu559fh4a7pp.apps.googleusercontent.com',
				scope: 'email',
			});
		});
	}
	render() {
		return <div>Google Auth</div>;
	}
}

export default GoogleAuth;
