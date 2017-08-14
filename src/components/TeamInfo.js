import React from 'react';
import Student from './Student';
import TiMail from 'react-icons/lib/ti/mail';

export default class TeamInfo extends React.Component {
	render() {
		const name = this.props.team.name;
		const students = this.props.team.members;
		const room = this.props.team.room;
		const coaches = this.props.team.coaches;

		return (
			<div className="TeamInfo">
				<h3>Team: {name}</h3>
				<button ><TiMail />Email Team</button>
				{students.map(function(s, i){
					return <Student displayType="inline" key={i} student={s}/>
				})}
				<div className="details">
					<b>Room: {room} | </b>
					Coaches: {coaches}
				</div>
			</div>
		);
	}
}