import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class StreamCreate extends Component {
	renderInput({ input }) {
		return <input {...input} />;
	}

	render() {
		return (
			<form>
				<Field name="title" component={this.renderInput} />
				<Field name="description" component={this.renderInput} />
			</form>
		);
	}
}

export default reduxForm({
	form: 'streamCreate',
})(StreamCreate);
