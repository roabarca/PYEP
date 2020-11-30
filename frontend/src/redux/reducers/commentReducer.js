import { COMMENT_FETCH, COMMENT_SET } from '../constants/ActionTypes.js';

const initialState = {
	comments: []
};

const commentReducer = (state = initialState, action) => {
	switch(action.type) {

		case COMMENT_FETCH:
			return {
				...state,
				comments: action.payload.comments,
			};
		case COMMENT_SET:
			return {
				...state,
				comments: [...state.comments, action.payload.comment]
			}
		default:
			return state;
	}
}

export default commentReducer;