import React, { useState } from 'react';

const UpdateProduct = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [category, setCategory] = useState('');
	const [company, setCompany] = useState('');

	const updateProduct = async () => {
		console.log(name, price, category, company);
	};

	return (
		<div className='product'>
			<h1 className='product1'>Update Product</h1>
			<input
				type='text'
				name=''
				placeholder='Enter product name'
				className='input-box'
				value={name}
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<input
				type='text'
				name=''
				placeholder='Enter product price'
				className='input-box'
				value={price}
				onChange={e => {
					setPrice(e.target.value);
				}}
			/>

			<input
				type='text'
				name=''
				placeholder='Enter product category'
				className='input-box'
				value={category}
				onChange={e => {
					setCategory(e.target.value);
				}}
			/>

			<input
				type='text'
				name=''
				placeholder='Enter product company'
				className='input-box'
				value={company}
				onChange={e => {
					setCompany(e.target.value);
				}}
			/>

			<button onClick={updateProduct} className='signup-button'>
				Update Product
			</button>
		</div>
	);
};

export default UpdateProduct;
