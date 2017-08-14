import React from 'react';
import { Link } from 'react-router-dom';

export default class Student extends React.Component {
	render() {
		const name = this.props.student.name;
		const displayType = this.props.displayType;
		const image = require('../static/img/' + this.props.student.image);
		const studentLink = "/student/" + this.props.student.id;
		
		return (
			<div className={displayType + " Student"}>
				<Link to={studentLink}>
					<img src={image} alt={name}/>
					<div>{name}</div>
				</Link>
			</div>
		);
	}
}