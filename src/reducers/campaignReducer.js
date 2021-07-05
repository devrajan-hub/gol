import {GET_ALL_CAMPAIGN} from '../actions/types';

const initailState = {
    campaigns : []
};

export default (state = initailState, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_ALL_CAMPAIGN:
            return {
                ...state,
                campaigns : payload
            }
        default:
            return state;   
    }
}