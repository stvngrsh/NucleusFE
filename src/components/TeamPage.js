import React from 'react';
import teams from '../static/data/teams';
import activities from '../static/data/activities';
import adhoc from '../static/data/adhoc';
import TeamInfo from './TeamInfo';
import FeedbackContainer from './FeedbackContainer';
import ActivityFeedbackForm from './ActivityFeedbackForm';
import AdHocFeedbackForm from './AdHocFeedbackForm';
import FeedbackEditCard from './FeedbackEditCard';

export class TeamPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			display: 'main',
			activity: {},
			adhoc: {},
			editMode: false
		};

		this.handleActivityFormClick = this.handleActivityFormClick.bind(this);
		this.handleAdHocFormClick = this.handleAdHocFormClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleActivityFormClick(a) {
		this.setState({
			display: 'activityFB',
			activity: a
		});
	}

	handleAdHocFormClick(a) {
		if(a) {
			this.setState({
				display: 'adhocFB',
				adhoc: a
			});
		}
		else {
			this.setState({
				display: 'adhocFB',
				adhoc: {}
			});
		}
		
	}

	handleEditClick(){
		this.setState({editMode: true});
	}

	handleCancel(){
		this.setState({editMode: false});
	}

	handleSubmit(){
		this.setState({editMode: false});
	}

	renderFBEditCard() {
		var auth = false;
		if(this.props.user === this.state.activity.feedback.author){
			auth = true;
		}
		return (
			<FeedbackEditCard feedback={this.state.activity.feedback} handleEditClick={this.handleEditClick} auth={auth}/>
		);
	}

	renderAdHocEditCard() {
		var auth = false;
		if(this.props.user === this.state.adhoc.author){
			auth = true;
		}
		return (
			<FeedbackEditCard feedback={this.state.adhoc} handleEditClick={this.handleEditClick} auth={auth}/>
		);
	}

	renderFBContainer() {
		const team = teams[this.props.teamNum];

		return(
			<FeedbackContainer activities={activities || []} adhoc={team.adhoc || []} handleActivityFormClick={this.handleActivityFormClick} handleAdHocFormClick={this.handleAdHocFormClick} />
		);
	}

	renderActivityForm() {
		return(
			<ActivityFeedbackForm activity={this.state.activity} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} editMode={this.state.editMode}/>
		);
	}

	renderAdHocForm() {
		return(
			<AdHocFeedbackForm adhoc={this.state.adhoc} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} editMode={this.state.editMode}/>
		);
	}

	render() {
		const team = teams[this.props.teamNum];

		return (
			<div>
				<TeamInfo team={team} />
				{this.state.display==='main' ? this.renderFBContainer() : ''}
				{!this.state.editMode && this.state.activity.complete && this.state.display==='activityFB' ? this.renderFBEditCard() : ''}
				{this.state.display==='activityFB' ? this.renderActivityForm() : ''}

				{!this.state.editMode && this.state.adhoc.name && this.state.display==='adhocFB' ? this.renderAdHocEditCard() : ''}
				{this.state.display==='adhocFB' ? this.renderAdHocForm() : ''}
			</div>
		);
	}
}

export default TeamPage;