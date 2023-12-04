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

	const deleteProduct = async id => {
		console.log(id);
		let result = await fetch(`http://localhost:5000/products/${id}`, {
			method: 'Delete',
		});
		result = await result.json();
		if (result) {
			// alert('record is delete');
			getProducts();
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
				<li>Operation</li>
			</ul>
			{products.map((item, index) => (
				<li key={index}>
					<ul key={item._id}>
						<li>{index + 1}</li>
						<li>{item.name}</li>
						<li>${item.price}</li>
						<li>{item.category}</li>
						<li>
							<button
								onClick={() => deleteProduct(item._id)}
								className='delete-button'>
								Delete
							</button>
						</li>
					</ul>
				</li>
			))}
		</div>
	);
};

export default ProductList;
