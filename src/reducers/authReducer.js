import {
	LOGIN_SUCCESS
} from '../actions/types';

const initialState = {
	isAuthenticated: false,
	token: localStorage.getItem('token'),
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case LOGIN_SUCCESS:
            return {
				...state,
				...payload,
				isAuthenticated: payload.isAuthenticated
			};
        default:
			return state;
    }
}