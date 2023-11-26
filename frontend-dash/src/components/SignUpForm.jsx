import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	// const submitData = async () => {
	// 	console.warn(name, email, password);
	// 	try {
	// 		let result = await fetch('http://localhost:5000/register', {
	// 			method: 'POST',
	// 			body: JSON.stringify({ name, email, password }),
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		});

	// 		if (!result.ok) {
	// 			throw new Error(`HTTP error! Status: ${result.status}`);
	// 		}

	// 		result = await result.json();
	// 		console.warn(result);

	// 		if (result) {
	// 			navigate('/');
	// 		}
	// 	} catch (error) {
	// 		console.error('Fetch error:', error);
	// 	}
	// };

	const submitData = async () => {
		console.warn(name, email, password);
		let result = await fetch('http://localhost:5000/register', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		result = await result.json();
		console.warn(result);
		if (result) {
			navigate('/');
		}
	};
	return (
		<div style={{ marginLeft: '35%', marginTop: 60 }}>
			<h1 style={{ marginLeft: 90, color: 'orange' }}>Registration</h1>
			<input
				className='input-box'
				type='text'
				placeholder='enter a name'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<input
				className='input-box'
				type='text'
				placeholder='enter a email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<input
				className='input-box'
				type='text'
				placeholder='enter a password'
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<button
				type='button'
				onClick={submitData}
				style={{
					margin: 21,
					width: 150,
					height: 30,
					background: '#8b1c1c',
					color: 'white',
					border: 0,
					borderRadius: 3,
					marginLeft: 23,
					cursor: 'pointer',
				}}>
				Sign Up
			</button>
		</div>
	);
};

export default SignUpForm;
