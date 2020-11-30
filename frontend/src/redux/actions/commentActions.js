import { COMMENT_FETCH, COMMENT_SET } from '../constants/ActionTypes.js';

export const fetchComments = (comments) => {
	return {
		type: COMMENT_FETCH,
		payload: {
			comments: comments,
		}
	}
}

export const createComment = (comment) => {
	return {
		type: COMMENT_SET,
		payload: {
			comment: comment,
		}
	}
}