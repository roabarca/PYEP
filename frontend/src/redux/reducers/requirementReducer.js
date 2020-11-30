import { REQUIREMENT_FETCH, REQUIREMENT_SET } from '../constants/ActionTypes.js';

const initialState = {
	requirements: []
};

const requirementReducer = (state = initialState, action) => {
	switch(action.type) {

		case REQUIREMENT_FETCH:
			return {
				...state,
				requirements: action.payload.requirements,
			};
		case REQUIREMENT_SET:
			return {
				...state,
				requirements: [...state.requirements, action.payload.requirement]
			}
		default:
			return state;
	}
}

export default requirementReducer;
