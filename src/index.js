import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import SearchBar from './components/search_bar';
import ProductList from './components/product_list';
import ProductDetail from './components/product_details';

// create new component this will produce some html

/**
 * index.js that is main container contains many
 * components
 * <SearchBar /> & <App /> instance of component
 * functional based component
 * E.G - const App = () => {return ();}
 */

/**
 * Passing data parent (App) to child(product_list)
 * react using props
 * e.g <PtroductList products ={this.state.products}
 * here products refer as a props.
 * In function component props as a argument (props)
 * In class component we can access using
 * (this.props)
 * Here We want to update product(change current
 * state) on click but our view is in App so we
 * need to pass function parent to child for
 * that we create onProductSelect custom event
 * function & passes to child bcz when product
 * click product updated & state changed.
*/


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			products: [],
			selectedProduct: null,
			term: ''
		};

		this.productSearch(this.state.term);

	}

	productSearch(term){
		axios
    .get(`https://optstaging.optcentral.com/optportal/services/brand/items.json?catalog_type=standard&login=hkot_SUPER&company=129&page=1&filtering=true&prodPerPage=24&priceOption=retail&range=0-0&keysearchtype=keywords&category_ids=1738&keywords=`	+ term	).then( (res) => {

			this.setState({
  			products: res.data.hashMap.products,
  			selectedProduct: res.data.hashMap.products[0] // set initial selected product
    	})

		}).catch(err => console.log(err))
	}

	render() {
		const productSearch = _.debounce( (term) => {this.productSearch(term) }, 300); // throttling

		return(
			<div>
				<h2 className="text-center"> React + Redux Application </h2>

				<SearchBar onSearchTermChange ={productSearch} />

				<ProductDetail product={this.state.selectedProduct} />

				<ProductList
					onProductSelect={ selectedProduct => this.setState({selectedProduct}) } products={this.state.products} />
			</div>
		);
	}

}

ReactDOM.render(<App />, document.getElementById('mainApp'));