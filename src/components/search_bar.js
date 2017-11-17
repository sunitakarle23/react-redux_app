/**
 * { Component } to import react component * in
 * component variable just like a
 * const Component = React.Component
 * deremohan01@gmail.com pass- m29691sd-PWD
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

import React, { Component } from 'react';

// class based component
class SearchBar extends Component{
	constructor(props){
		super(props); // to extend parent properties

		this.state = { term: 'starting value' }; //onchane this.state.term value changed
	}

	render() {
		return (
			<div>
				<input  value={this.state.term} onChange={ (event) => this.setState({ term: event.target.value })} />
			</div>
		);
	}

}

export default SearchBar;