import React, { useState, useEffect } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Task } from '../models';
const BuyItemList = () => {
	const [messages, updateMessages] = useState([]);

	useEffect(() => {
		fetchMessages();
		const subscription = DataStore.observe(Task).subscribe(() =>
			fetchMessages(),
		);
		return () => subscription.unsubscribe();
	}, []);

	async function fetchMessages() {
		const messages = await DataStore.query(Task);
		updateMessages(messages);
	}

	const handleAddToChartClick = (e) => {
		const newItem = [...messages];
		const itemAddCart = newItem[e];
		localStorage.setItem('items', JSON.stringify(itemAddCart));
	};

	return (
		<div className="container">
			{messages.map((item, index) => (
				<div
					className="itemsToAdd"
					key={index}
					onClick={() => {
						handleAddToChartClick(index);
					}}
				>
					<div className="imgItems">
						<img src={item.img} alt={item.title} />
					</div>
					<div className="details">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default BuyItemList;
