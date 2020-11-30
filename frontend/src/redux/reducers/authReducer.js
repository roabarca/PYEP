import { LOGIN, LOGOUT } from '../constants/ActionTypes.js';

const initialState = {
	isLogged: localStorage.getItem('token') ? true : false,
};

const authReducer = (state = initialState, action) => {
	switch(action.type) {

		case LOGIN:
			return {
				...state,
				...action.payload,
			};
		case LOGOUT:
			return {
				...state,
				...action.payload,
			}
		default:
			return state;
	}
}

export default authReducer;
