import React, { useState, useEffect } from 'react';
const CartItemList = () => {
	const [items, setItem] = useState({});

	useEffect(() => {
		getItem();
	}, []);
	const getItem = () => {
		const localData = localStorage.getItem('items');
		const items = JSON.parse(localData);
		setItem(items);
	};
	console.log(items);
	return (
		<div className="container">
			<div className="itemsToAdd">
				<div className="imgItems">
					<img src="https://ui-avatars.com/api/?name=elmer" />
				</div>
				<div className="detailsItems">
					<h1>{items.title}</h1>
					<p>{items.description}</p>
				</div>
			</div>
		</div>
	);
};

export default CartItemList;
