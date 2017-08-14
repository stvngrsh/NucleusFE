import React from 'react';

export class AdHocItem extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const name = this.props.name;
		const author = this.props.author;
		const date = this.props.date;

		return (
			<div className="AdHocItem" onClick={this.props.handleClick}>
				<div>{name}</div>
				<div>{author}</div>
				<div>{date}</div>
				<button>View Feedback</button>
			</div>
		);
	}
}

export default AdHocItem;