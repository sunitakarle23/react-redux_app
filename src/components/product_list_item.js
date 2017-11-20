import React from 'react';

/**
* ({product}) it shows that props has an
* property product. so no need to write this.
* const product = props.product; we can
* directly access product.
* By using Es6 we can directly access two
* objects of props using comma seperator.
*/

/** flow of change product on click
 * 1. index.js (onProductSelect={
 * selectedProduct =>
 * this.setState({selectedProduct}) } )
 * here selectedProduct is a param which send
 * onclick
 * 2. product_list.js(
 * onProductSelect={props.onProductSelect})
 * 3. on click 	onClick={ () => onProductSelect(
 * product)}
 * const ProductListItem = ({ product,
 * onProductSelect }) =>{
 */


const ProductListItem = ({product, onProductSelect}) =>{

	const imageUrl = 'https://optstaging.optcentral.com/optportal/catalog/'+ product.company_id +'/regular/' + product.image;


	return (
		<li
			key={product.id}
			onClick={ () => onProductSelect(product)}
			className="list-group-item">
				<div className="product-list media-left">
					<img className="img img-circle img-responsive" src={imageUrl} />
				</div>
				<div className="media-heading">
					{product.style_hash}
				</div>
		</li>
	);

}

export default ProductListItem;