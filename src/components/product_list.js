/**
 * onProductSelect we can pass selected
 * product parent to child
 */

import React from 'react';
import ProductListItem from './product_list_item';

/**
 * for map we use key attr to avoid warnings
 * for map function it contains unique value.
 */


//functional component
const ProductList = (props) =>{
	let cnt = 0;
	const productItems = props.products.map(
		(product) => {
			cnt ++;
			if(cnt >= 5){
				return;
			}

			return (
				<ProductListItem
					onProductSelect={props.onProductSelect}
					key={product.id}
					product={product} />
			);
	});

	return (
		<ul className="col-md-3 list-group">
			{productItems}
		</ul>
	);
}

export default ProductList;