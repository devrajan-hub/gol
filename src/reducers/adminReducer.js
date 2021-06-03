// import {SELECT_PERIOD} from './types';
import {SELECT_PERIOD} from '../actions/types'

const initailState = {
	slctPeriodDialogOpen: false
};

export default (state = initailState, action) => {
    const { type, payload } = action;
    switch(type){
        case SELECT_PERIOD:
        return{
            ...state,
			slctPeriodDialogOpen: payload
        };   
        default:
			return state;
    }
}    