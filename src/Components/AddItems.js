import React, { useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Task } from '../models';
const AddItems = () => {
	const [formState, updateFormState] = useState({
		img: '',
		title: '',
		description: '',
	});

	const createMessage = async (e) => {
		e.preventDefault();
		if (!formState) return;
		await DataStore.save(new Task({ ...formState }));
		updateFormState(formState);
		console.log(formState);
	};
	return (
		<div className="container">
			<form onSubmit={createMessage}>
				<div className="form-group">
					<input
						name="img"
						type="file"
						className="form-control-file"
						onChange={(e) =>
							updateFormState({ ...formState, img: e.target.files[0].name })
						}
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						name="title"
						className="form-control"
						onChange={(e) =>
							updateFormState({ ...formState, title: e.target.value })
						}
					/>
				</div>
				<div className="form-group">
					<textarea
						name="description"
						className="form-control"
						rows="3"
						onChange={(e) =>
							updateFormState({ ...formState, description: e.target.value })
						}
					></textarea>
				</div>
				<button type="submit" className="btn btn-primary">
					Add
				</button>
			</form>
		</div>
	);
};

export default AddItems;
