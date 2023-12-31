import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

	const searchHandle = async event => {
		let key = event.target.value;
		if (key) {
			let result = await fetch(`http://localhost:5000/search/${key}`);
			result = await result.json();
			if (result) {
				setProducts(result);
			}
			console.warn(event.target.value);
		} else {
			getProducts();
		}
	};

	return (
		<div className='product-list'>
			<h1>Product List</h1>
			<input
				type='text'
				placeholder='Search Product'
				className='searchInput'
				onChange={searchHandle}
			/>
			<ul>
				<li>S. No</li>
				<li>Name</li>
				<li>Price</li>
				<li>Category</li>
				<li>Operation</li>
			</ul>
			{products.length > 0 ? (
				products.map((item, index) => (
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
								<Link to={'/update/' + item._id}>Update</Link>
							</li>
						</ul>
					</li>
				))
			) : (
				<h1>No Result Found</h1>
			)}
		</div>
	);
};

export default ProductList;
