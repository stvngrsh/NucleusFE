import React from 'react';
import TeamCard from './TeamCard';
import TiMail from 'react-icons/lib/ti/mail';

export default class MyRoom extends React.Component {
	render() {
		const room = this.props.room;
		const teams = this.props.teams;

		return (
			<div className="MyRoom">
				<h2>My Room: {room}</h2>
				<button onClick=""><TiMail />Email My Room</button>
				{teams.map(function(t, i){
					return <TeamCard key={i} link={i} name={t.name} students={t.members}/>
				})}
			</div>
		);
	}
}
