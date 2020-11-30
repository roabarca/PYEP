import { PROYECT_FETCH, PROYECT_SET } from '../constants/ActionTypes.js';

export const fetchProyects = (proyects) => {
	return {
		type: PROYECT_FETCH,
		payload: {
			proyects: proyects,
		}
	}
}

export const createProyect = (proyect) => {
	return {
		type: PROYECT_SET,
		payload: {
			proyect: proyect,
		}
	}
}