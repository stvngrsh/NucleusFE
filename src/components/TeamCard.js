import React from 'react';
import Student from './Student';
import { Link } from 'react-router-dom';

export default class TeamCard extends React.Component {
	render() {
		const name = this.props.name;
		const students = this.props.students;
		const teamLink = "/team/" + this.props.link;
		return (
			<div className="TeamCard">
				<h3>Team: {name}</h3>
				<Link className="teampage" to={teamLink}>
	            	View Team Page
	            </Link>
				{students.map(function(s, i){
					return <Student displayType="centered" key={i} student={s}/>
				})}
			</div>
		);
	}
}