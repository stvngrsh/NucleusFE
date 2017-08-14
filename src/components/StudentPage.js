import React from 'react';
import teams from '../static/data/teams';
import students from '../static/data/students';
import StudentInfo from './StudentInfo';
import FeedbackContainer from './FeedbackContainer';
import AdHocFeedbackForm from './AdHocFeedbackForm';
import FeedbackEditCard from './FeedbackEditCard';

export class StudentPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			display: 'main',
			adhoc: {},
			editMode: false
		};

		this.handleAdHocFormClick = this.handleAdHocFormClick.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
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
		const student = students[this.props.studentNum];

		return(
			<FeedbackContainer activities={[]} adhoc={student.adhoc || []} handleAdHocFormClick={this.handleAdHocFormClick} />
		);
	}

	renderAdHocForm() {
		return(
			<AdHocFeedbackForm adhoc={this.state.adhoc} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} editMode={this.state.editMode}/>
		);
	}

	render() {
		const student = students[this.props.studentNum];

		return (
			<div>
				<StudentInfo student={student} />
				{this.state.display==='main' ? this.renderFBContainer() : ''}

				{!this.state.editMode && this.state.adhoc.name && this.state.display==='adhocFB' ? this.renderAdHocEditCard() : ''}
				{this.state.display==='adhocFB' ? this.renderAdHocForm() : ''}
			</div>
		);
	}
}

export default StudentPage;