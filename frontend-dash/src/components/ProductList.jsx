import React, { useState, useEffect } from 'react';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			let result = await fetch('http://localhost:5000/products');
			result = await result.json();
			setProducts(result);
		} catch (error) {
			console.error('Error fetching products:', error);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className='product-list'>
			<h1>Product List</h1>
			<ul>
				<li>S. No</li>
				<li>Name</li>
				<li>Price</li>
				<li>Category</li>
			</ul>
			<ul>
				{products.map((item, index) => (
					<li key={index}>
						<ul>
							<li>{index + 1}</li>
							<li>{item.name}</li>
							<li>${item.price}</li>
							<li>{item.category}</li>
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
