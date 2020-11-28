import { SET_USER_INFO } from '../types';
export function setUserInfo(payload) {
	return {
		type: SET_USER_INFO,
		payload,
	};
}
