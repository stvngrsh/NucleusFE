import React from 'react';
import Student from './Student';
import TiMail from 'react-icons/lib/ti/mail';

export default class StudentInfo extends React.Component {
	render() {
		const student = this.props.student;
		const team = student.team;
		const room = student.room;
		const coaches = student.coaches;

		return (
			<div className="StudentInfo">
				<Student displayType="inline" student={student} />
				<button ><TiMail />Email Team</button>
				<div className="team">
					<b>Team: {team}</b>
				</div>
				<div className="room">
					<b>Room: {room} | </b>
					Coaches: {coaches}
				</div>
			</div>
		);
	}
}