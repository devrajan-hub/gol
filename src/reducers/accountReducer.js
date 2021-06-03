import { UNSUBSCRIBE_PLAN } from '../actions/types';

const initailState = {
    unsubscribeDialogOpen:false
};

export default (state = initailState, action) => {
    const {type,payload} = action;
    switch(type){
        case UNSUBSCRIBE_PLAN:
        return{
            ...state,
            unsubscribeDialogOpen:payload
        };
        default:
            return state;
    }
}