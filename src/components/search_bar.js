/**
 * { Component } to import react component * in
 * component variable just like a
 * const Component = React.Component
 */

/*
	// react functional component
	const SearchBar = () =>{
		return <input />
	}
*/

/**
 * when we need to create component using class need
 * React.Component & render function.
 * Only class based component has state not
 * functional based component.
 * Each Class has its own state obj whenever class
 * change components re render to initialize state
 * set in constructor.
 * onChange={ (event) => console.log(event.target.value)} error function one line
 */

 /**
  * this.props.onSearchTermChange(term)  we can
  * handle function when search input chnage
  */

import React, { Component } from 'react';

// class based component
class SearchBar extends Component{
	constructor(props){
		super(props); // to extend parent properties

		this.state = { term: '' }; //onchane this.state.term value changed
	}

	render() {
		return (
			<div className="search-bar text-center">
				<input
					className="form-control"
					onChange={ event => this.onInputChange(event.target.value) } />
			</div>
		);
	}
	onInputChange(term) {

		this.setState({ term });
		console.log(this.state);
		this.props.onSearchTermChange(term);
		console.log(this.props);
	}

}

export default SearchBar;