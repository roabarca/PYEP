import { LOGIN, LOGOUT } from '../constants/ActionTypes.js';

export const login = () => {
	return {
		type: LOGIN,
		payload: {
			isLogged: true,
		},
	}
}

export const logout = () => {
	return {
		type: LOGOUT,
		payload: {
			isLogged: false,
		},
	}
}