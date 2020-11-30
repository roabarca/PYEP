import { createStore, combineReducers } from 'redux';
import requirementReducer from './reducers/requirementReducer.js';
import proyectReducer from './reducers/proyectReducer.js';
import commentReducer from './reducers/commentReducer.js';
import authReducer from './reducers/authReducer.js';

const appReducer = combineReducers({
	requirementReducer: requirementReducer,
	proyectReducer: proyectReducer,
    commentReducer: commentReducer,
    authReducer: authReducer,
});

export default createStore(appReducer);