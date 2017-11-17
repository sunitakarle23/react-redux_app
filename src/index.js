import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
// create new component this will produce some html

/**
 * index.js that is main container contains many
 * components
 * <SearchBar /> & <App /> instance of component
 */


// functional based component
const App = () => {
	return(
		<div>
			<SearchBar />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('mainApp'));