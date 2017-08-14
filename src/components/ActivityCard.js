import React from 'react';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';

export class ActivityCard extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		const name = this.props.name;
		const desc = this.props.desc;
		const status = this.props.status;

		return (
			<div className="ActivityCard">
				<FaCheckCircle className={status ? 'checked' : ''} />
				<h3>{name}</h3>
				<p>{desc}</p>
				<button onClick={this.props.handleClick} className={status ? 'checked' : ''}>{status ? 'View Feedback' : 'Provide Feedback'}</button>
			</div>
		);
	}
}

export default ActivityCard;