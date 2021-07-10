import {GET_ALL_CAMPAIGN, GET_CAMPAIGN} from '../actions/types';

const initailState = {
    campaigns : [],
    campaignlist : []
};

export default (state = initailState, action) => {
    const {type, payload} = action;

    switch(type){
        case GET_ALL_CAMPAIGN:
            return {
                ...state,
                campaigns : payload
            }
            case GET_CAMPAIGN:
                console.log('payload',payload);
                return {
                    ...state,
                    campaignslist : payload
                }    
        default:
            return state;   
    }
}