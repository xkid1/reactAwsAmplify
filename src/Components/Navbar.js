import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="container text-center">
			<h1>Grocery list</h1>
			<NavLink to="/add-item" className="btn btn-primary ">
				Add item to buy list
			</NavLink>
			<div className="mt-5">
				<NavLink to="/buy-item" className="butItem">
					Buy list
				</NavLink>
				<NavLink to="/cat-item" className="cartItem">
					Cart list
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;
