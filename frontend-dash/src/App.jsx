import React from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/SignUpForm.jsx';
import PrivateComponent from './components/PrivateComponent.jsx';
import Login from './components/Login.jsx';

function App() {
	return (
		<>
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route element={<PrivateComponent />}>
						<Route path='/' element={<h1>Prodcut Listing component</h1>} />
						<Route path='/add' element={<h1>Add Prodcut component</h1>} />
						<Route path='/update' element={<h1>Update Prodcut component</h1>} />
						<Route path='/logout' element={<h1>Logout Prodcut component</h1>} />
						<Route
							path='/profile'
							element={<h1>Profile Prodcut component</h1>}
						/>
					</Route>

					<Route path='/signupform' element={<SignUpForm />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;
