import React from 'react';

import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
	return (
		<div className="container">
			<h1>Grocery list</h1>
			<Link to="/add-item">Add item to buy list</Link>
			<Link to="/buy-item">Buy list</Link>
			<Link to="/cat-item">Cart list</Link>
		</div>
	);
};

export default Navbar;
