import React from 'react';
import teams from '../static/data/teams';
import MyRoom from './MyRoom';

const room = 1056;

export class HomePage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		};

	}

	render() {
		return (
			<div>
				<MyRoom teams={teams} room={room}/>
			</div>
		);
	}
}

export default HomePage;