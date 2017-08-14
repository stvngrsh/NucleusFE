import React from 'react';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrashO from 'react-icons/lib/fa/trash-o';
import TiMail from 'react-icons/lib/ti/mail';

export class FeedbackEditCard extends React.Component {
	constructor(props) {
		super(props);

		this.handleDeleteClick = this.handleDeleteClick.bind(this);

	}

	handleDeleteClick() {

	}

	renderAuth() {
		const handleEditClick = this.props.handleEditClick;
		return (
			<div className="editdelete">
				<button onClick={handleEditClick}><FaEdit /> Edit Feedback</button>
				<button onClick={this.handleDeleteClick}><FaTrashO /> Delete Feedback</button>
			</div>
		);
	}

	renderNotAuth() {
		return (
			<button onClick={this.handleDeleteClick}><TiMail /> Email Feedback</button>
		);
	}

	render() {
		const author = this.props.feedback.author;
		const date = this.props.feedback.date;
		const time = this.props.feedback.time;

		const auth = this.props.auth;

		return (
			<div className="FeedbackEditCard">
				<h5>Feedback Left By</h5>
				<h3>{author} {auth ? '(You)' : ''} on {date} at {time}</h3>
				
				{auth ? this.renderAuth() : this.renderNotAuth()}

			</div>
		);
	}
}

export default FeedbackEditCard;