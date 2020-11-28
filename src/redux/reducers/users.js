import { SET_USER_INFO } from '../types';

const initailState = {
	info: [
		{
			id: '1',
			title: 'Egg',
			body:
				'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an un',
		},
		{
			id: '2',
			title: 'Duck',
			body:
				'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an un',
		},
		{
			id: '3',
			title: 'Frog',
			body:
				'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an un',
		},
	],
};

const usersReducers = (state = initailState, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			return {
				...state,
				info: {
					...state.info,
					...action.payload,
				},
			};

		default:
			return state;
	}
};
export default usersReducers;
