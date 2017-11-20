import React, {Component} from 'react';

class  ProductDetail extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const product = this.props.product;

		if(!product){
			return <div>loading...</div> ;
		}

		const imageUrl = 'https://optstaging.optcentral.com/optportal/catalog/'+ product.company_id +'/regular/' + product.image;

		const detailsList =
			product.properties2.details.map((data) => {
				return (
					<li key={data.propTypeId} ><strong>{data.name} : </strong> {data.value}</li>
				)
			});

		return (
			<div className="details col-md-9">
				<div className="media-left">
					<img className="img-thumbnail product-image" src={imageUrl} />
				</div>
				<div className="media-body">
					{detailsList}
				</div>
			</div>
		);

	}

}

export default ProductDetail;