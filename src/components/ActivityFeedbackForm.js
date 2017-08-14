import React from 'react';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';

export class ActivityFeedbackForm extends React.Component {
	constructor(props) {
		super(props);

		var checkboxes = [];
		for(let i = 0; i < props.activity.objectives.length; i++){
			checkboxes.push(false);
		}

		this.state = {
			radioSelect: '',
			checkboxes: checkboxes,
			textVal: ''
		};

		this.handleRadioChange = this.handleRadioChange.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	componentDidMount(){
		if(this.props.activity.feedback){
			var feedback = this.props.activity.feedback;

			this.setState({
				radioSelect: feedback.achieve,
				checkboxes: feedback.objectives,
				textVal: feedback.comments
			});
		}
	}
	
	handleRadioChange(e) {
		if(!this.props.editMode && this.props.activity.complete){
			return;
		}
		this.setState({radioSelect: e.target.value});
	}

	handleToggle(e) {
		if(!this.props.editMode && this.props.activity.complete){
			return;
		}
		var temp = this.state.checkboxes;
		temp[e.target.value] = !temp[e.target.value];

		this.setState({checkboxes: temp});
	}

	handleTextChange(e) {
		if(!this.props.editMode && this.props.activity.complete){
			return;
		}
		this.setState({textVal: e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
	}

	render() {
		const name = this.props.activity.name;
		const objectives = this.props.activity.objectives;

		var radioSelect = this.state.radioSelect;
		var checkboxes = this.state.checkboxes;
		var textVal = this.state.textVal;

		const handleRadioChange = this.handleRadioChange;
		const handleToggle = this.handleToggle;
		const handleTextChange = this.handleTextChange;
		const handleCancel = this.props.handleCancel;
		const handleSubmit = this.props.handleSubmit;

		var complete = !this.props.editMode && this.props.activity.complete;

		return (
			<div className="ActivityFeedbackForm">
				<h4>{name}</h4>
				<p>Please complete the following form in regard to the team's overall performance during this activity.</p>
				<form className={complete ? 'readonly' : ''}>
					<h4>How well did the team complete the activity's objective?</h4>
					<input type="radio" value="0" id="radio1" checked={radioSelect == 0} onChange={handleRadioChange} />
					<label htmlFor="radio1">N/A</label>

					<input type="radio" value="1" id="radio2" checked={radioSelect == 1} onChange={handleRadioChange} />
					<label htmlFor="radio2">Needs Improvement</label>
					
					<input type="radio" value="2" id="radio3" checked={radioSelect == 2} onChange={handleRadioChange} />
					<label htmlFor="radio3">Good</label>
					
					<input type="radio" value="3" id="radio4" checked={radioSelect == 3} onChange={handleRadioChange} />
					<label htmlFor="radio4">Excellent</label>

					<h4>Which of the following did the team do well during the activity?</h4> 
					{objectives.map(function(o, i){
						return(
							<div className="checkbox">
								<input id={'checkbox' + i} key={i} type="checkbox" value={i} checked={checkboxes[i]} onChange={handleToggle}/>
								<label htmlFor={'checkbox' + i}><FaCheckCircle size={24} />{o.name}</label>
							</div>
						);
					})}
					<h4>Any additional comments on how the team performed during this objective? (Optional)</h4>
					<textarea disabled={complete} value={textVal} onChange={handleTextChange} />
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

export default ActivityFeedbackForm;