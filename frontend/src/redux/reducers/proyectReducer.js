import { PROYECT_FETCH, PROYECT_SET } from '../constants/ActionTypes.js';

const initialState = {
	proyects: []
};

const proyectReducer = (state = initialState, action) => {
	switch(action.type) {

		case PROYECT_FETCH:
			return {
				...state,
				proyects: action.payload.proyects,
			};
		case PROYECT_SET:
			return {
				...state,
				proyects: [...state.proyects, action.payload.proyect]
			}
		default:
			return state;
	}
}

export default proyectReducer;
