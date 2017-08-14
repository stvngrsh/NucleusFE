import React from 'react';

export class AdHocFeedbackForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			titleVal: '',
			flagVal: false,
			feedbackVal: ''
		};

		this.handleToggle = this.handleToggle.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
	}

	componentDidMount(){
		if(this.props.adhoc){
			var adhoc = this.props.adhoc;

			this.setState({
				titleVal: adhoc.name,
				flagVal: adhoc.flag,
				feedbackVal: adhoc.feedback
			});
		}
	}

	handleToggle(e) {
		if(!this.props.editMode && this.props.adhoc){
			return;
		}

		this.setState({flagVal: !this.state.flagVal});
	}

	handleTitleChange(e) {
		if(!this.props.editMode && this.props.adhoc){
			return;
		}
		this.setState({titleVal: e.target.value});
	}

	handleFeedbackChange(e) {
		if(!this.props.editMode && this.props.adhoc){
			return;
		}
		this.setState({feedbackVal: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
	}

	render() {

		var titleVal = this.state.titleVal;
		var flagVal = this.state.flagVal;
		var feedbackVal = this.state.feedbackVal;

		const handleFeedbackChange = this.handleFeedbackChange;
		const handleToggle = this.handleToggle;
		const handleTitleChange = this.handleTitleChange;
		const handleCancel = this.props.handleCancel;
		const handleSubmit = this.props.handleSubmit;

		var complete = (!this.props.editMode && this.props.adhoc.name) ? true : false;

		return (
			<div className="AdHocFeedbackForm">
				<h4>Ad-Hoc Feedback</h4>
				<p>Please utilize Ad-Hoc Feedback to provide noates and feedback on team performance outside of the standard event schedule.</p>
				<p>(Ex. A team is generally working well together or a team was misbehaving in the hallway.)</p>
				<form className={complete ? 'readonly' : ''}>
					<h3>Feedback Title</h3>
					<input type="text" value={titleVal} onChange={handleTitleChange} disabled={complete} />

					<h3>Flag For Bad Behavior?</h3>
					<p>Note: Program team will be notified of this feedback is selected.</p>
					<label className="switch">
						<input type="checkbox" checked={flagVal} onChange={handleToggle}/>
						<span className="slider"></span>
					</label>

					<h3>Feedback</h3>
					<textarea disabled={complete} value={feedbackVal} onChange={handleFeedbackChange} />

					<div className="buttons">
						<button className="cancel" onClick={handleCancel}>Cancel</button>
          				<button className="submit" type="submit" onClick={handleSubmit}>Submit</button>
          				<button className="back" onClick={handleCancel}>Back</button>
          			</div>
				</form>
			</div>
		);
	}
}

export default AdHocFeedbackForm;