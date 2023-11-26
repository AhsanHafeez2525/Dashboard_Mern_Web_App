import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
	const auth = localStorage.getItem('user');

	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		navigate('/signupform');
		console.warn('logout');
	};

	return (
		<div>
			<div
				style={{
					background: '#8b1c1c',
					height: 50,
					display: 'flex',
					justifyContent: 'space-between',
					padding: 5,
				}}>
				<div>
					<h1 style={{ color: 'white' }}>E-Dashboard</h1>
				</div>
				<div>
					<ul className='nav-ul'>
						<li>
							<Link to='/'>Products</Link>
						</li>
						<li>
							<Link to='/add'>Add Product</Link>
						</li>

						<li>
							<Link to='/update'>Update Product</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
						<li>
							{' '}
							{auth ? (
								<Link to='/signupform' onClick={logout}>
									Logout
								</Link>
							) : (
								<Link to='/signupform'>Sign Up</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Nav;
