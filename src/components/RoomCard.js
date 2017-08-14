import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import { Link } from 'react-router-dom';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

export default class RoomCard extends React.Component {
	render() {
		const room = this.props.room;
		const coaches = this.props.coaches;
		const teams = this.props.teams;
		return (
			<div className="RoomCard">
				<h2>Room {room}</h2>
				<p>Coaches: {coaches}</p>
				<button ><TiMail />Email Team</button>
				{teams.map(function(t, i){
					const teamLink = "/team/" + i;
					return (
						<div key={i} className="teamlink">
							<Link to={teamLink}>
								<h3>{t.name}</h3>
								<FaAngleRight />
							</Link>
						</div>
					);
				})}
			</div>
		);
	}
}