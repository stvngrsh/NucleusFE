import React from 'react';
import rooms from '../static/data/rooms';
import EventCard from './EventCard';
import RoomCard from './RoomCard';

const event = "BTA:FTX";
const date = "July 10-14, 2017";

export class AdminPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {
		return (
			<div className="AdminPage">
				<EventCard event={event} date={date} />
				{rooms.map(function(r, i){
					return (
						<RoomCard room={r.number} coaches={r.coaches} teams={r.teams} />
					);
				})}
			</div>
		);
	}
}

export default AdminPage;