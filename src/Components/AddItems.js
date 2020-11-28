import React, { useState } from 'react';

const AddItems = () => {
	const [state, setTodo] = useState({
		todo: '',
		todoList: [],
	});

	const addItemHandle = (e) => {
		e.preventDefault();
	};
	const handleChange = (e) => {
		// console.log(e.target.value);
		setTodo(e.target.value);
	};
	return (
		<div className="container">
			<form onSubmit={addItemHandle}>
				{/* <div className="form-group">
					<input
						type="file"
						className="form-control-file"
						onChange={handleChange}
					/>
				</div> */}
				<div className="form-group">
					<input type="text" className="form-control" onChange={handleChange} />
				</div>
				{/* <div className="form-group">
					<textarea
						className="form-control"
						rows="3"
						onChange={handleChange}
					></textarea>
				</div> */}
				<button type="submit" className="btn btn-primary">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddItems;
