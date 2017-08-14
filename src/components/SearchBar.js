import React from 'react';
import { FaClose, FaSearch } from 'react-icons/lib/fa';
import suggestions from '../static/data/suggestions';
import Autosuggest from 'react-autosuggest';
import { Redirect } from 'react-router';

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  const regex = new RegExp('^' + escapedValue, 'i');

  return suggestions
    .map(section => {
      return {
        title: section.title,
        suggestions: section.suggestions.filter(suggestion => regex.test(suggestion.label))
      };
    })
    .filter(section => section.suggestions.length > 0);
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function renderSuggestion(suggestion) {
  return (
  	<div>
	    <div className="label">{suggestion.label}</div>
	    <p className="subtext">{suggestion.subtext}</p>
  	</div>
  	);
}

function renderSectionTitle(section) {
  return (
    <strong>{section.title}</strong>
  );
}

function getSectionSuggestions(section) {
  return section.suggestions;
}

function shouldRenderSuggestions(value) {
	return true;
}

export class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
      		suggestions: [],
      		redirect: false,
      		link: ''
		};
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
		this.clearSearch = this.clearSearch.bind(this);
	}

	onChange(event, { newValue }) {
	    this.setState({
	      value: newValue
	    });
	}
	onSuggestionsFetchRequested({ value }) {
    	this.setState({
    	  	suggestions: getSuggestions(value)
    	});
  	}
	onSuggestionsClearRequested() {
   		this.setState({
    		suggestions: []
   		});
 	}
 	onSuggestionSelected(e, v){
 		console.log(v)
 		this.setState({
 			redirect: true, 
 			link: v.suggestion.value
 		});
 	}
 	clearSearch(){
 		this.setState({
 			value: '',
 			suggestions: []
 		})
 	}

	render() {
		const { value, suggestions } = this.state;
		const inputProps = {
      		placeholder:"Begin typing a team's or participant's name...",
      		value,
      		onChange: this.onChange
    	};
    	if(this.state.redirect){
    		this.setState({redirect: false});
    		return <Redirect push to={this.state.link} />;
    	}
		return (
			<div className="SearchBar">
				<span className="searchicon"><FaSearch /></span>
				<Autosuggest 
					suggestions={suggestions} 
					onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
					onSuggestionsClearRequested={this.onSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					getSectionSuggestions={getSectionSuggestions}
					renderSectionTitle={renderSectionTitle}
					inputProps={inputProps}
					multiSection={true}
					onSuggestionSelected={this.onSuggestionSelected}
					shouldRenderSuggestions={shouldRenderSuggestions}
				/>
				<span onClick={this.clearSearch} className={this.state.value ? 'clearicon' : 'clearicon hidden'}><FaClose /></span>
			</div>
		);
	}
}

export default SearchBar;

