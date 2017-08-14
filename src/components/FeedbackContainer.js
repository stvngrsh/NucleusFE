import React from 'react';
import ActivityCard from './ActivityCard';
import AdHocItem from './AdHocItem';
import FaPlus from 'react-icons/lib/fa/plus';

export class FeedbackContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tab: true
		};

		this.handleActivityFormClick = this.handleActivityFormClick.bind(this);
		this.handleAdHocFormClick = this.handleAdHocFormClick.bind(this);
		this.handleNewAdHocFormClick = this.handleNewAdHocFormClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({tab: !this.state.tab});
	}

	handleActivityFormClick(a){
		this.props.handleActivityFormClick(a);
	}

	handleAdHocFormClick(a){
		this.props.handleAdHocFormClick(a);
	}
	handleNewAdHocFormClick(){
		this.props.handleAdHocFormClick();
	}

	renderActivityFB() {
		const activities = this.props.activities;

		const handleActivityFormClick = this.handleActivityFormClick;
		return (
			<div className="activities">
			{activities.map(function(a, i){
				return <ActivityCard key={i} name={a.name} desc={a.description} status={a.complete} handleClick={() => handleActivityFormClick(a)}/>
			})}
			</div>
		);
	}

	renderAdHocFB(){
		const adhoc = this.props.adhoc;
		const handleAdHocFormClick = this.handleAdHocFormClick;
		const handleNewAdHocFormClick = this.handleNewAdHocFormClick;

		if(adhoc.length > 0){
			return (
				<div className="adhoc">
					<h3> Ad-Hoc Feedback</h3>
					<p>Please utilize Ad-Hoc Feedback to provide notes and feedback on team performance outside of the standard event schedule.</p>
					<p>(Ex. A team is generally working well together or a team was misbehaving in the hallway.)</p>
					
					<div className="AdHocItem AdHocHeader">
						<div> Feedback Title </div>
						<div> Author </div>
						<div> Date/Time </div>
					</div>
					{adhoc.map(function(a, i){
						return <AdHocItem key={i} name={a.name} author={a.author} date={a.date} handleClick={() => handleAdHocFormClick(a)}/>
					})}
					<div className="no-adhoc">
						<button onClick={handleNewAdHocFormClick}><FaPlus /> Provide Feedback </button>
					</div>
				</div>
			);
		}
		else {
			return (
				<div className="adhoc">
					<h3> Ad-Hoc Feedback</h3>
					<p>Please utilize Ad-Hoc Feedback to provide notes and feedback on team performance outside of the standard event schedule.</p>
					<p>(Ex. A team is generally working well together or a team was misbehaving in the hallway.)</p>
					
					<div className="AdHocItem AdHocHeader">
						<div> Feedback Title </div>
						<div> Author </div>
						<div> Date/Time </div>
					</div>

					<div className="no-adhoc">
						<h3> No feedback has been provided yet! </h3>
						<button onClick={handleNewAdHocFormClick}><FaPlus />  Provide Feedback </button>
					</div>
				</div>
			);
		}
	}

	renderTabs(){
		if(this.props.activities.length > 0){
			return (
				<div className="FeedbackContainer">
					<button className={this.state.tab ? 'tab active' : 'tab'} onClick={this.handleClick}>Activity Feedback</button>
					<button className={this.state.tab ? 'tab' : 'tab active'} onClick={this.handleClick}>Ad-Hoc Feedback <span>{this.props.adhoc.length}</span></button>
					{this.state.tab ? this.renderActivityFB() : this.renderAdHocFB()}
				</div>
			);
		}
		else {
			return (
				<div className="FeedbackContainer">
					<button className='tab active' >Ad-Hoc Feedback <span>{this.props.adhoc.length}</span></button>
					{this.renderAdHocFB()}
				</div>
			);
		}
	}

	render() {
		return (
			<div >
				{this.renderTabs()}
			</div>
		);
	}
}

export default FeedbackContainer;