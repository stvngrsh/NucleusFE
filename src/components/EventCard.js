import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';

export default class EventCard extends React.Component {
	render() {
		const event = this.props.event;
		const date = this.props.date;

		return (
			<div className="EventCard">
				<h2><b>{event}</b></h2>
				<h2>{date} </h2>
				<button ><TiMail />Email Team</button>
			</div>
		);
	}
}