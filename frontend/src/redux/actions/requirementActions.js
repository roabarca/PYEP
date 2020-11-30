import { REQUIREMENT_FETCH, REQUIREMENT_SET } from '../constants/ActionTypes.js';

export const fetchRequirements = (requirements) => {
	return {
		type: REQUIREMENT_FETCH,
		payload: {
			requirements: requirements,
		}
	}
}

export const createRequirement = (requirement) => {
	return {
		type: REQUIREMENT_SET,
		payload: {
			requirement: requirement,
		}
	}
}