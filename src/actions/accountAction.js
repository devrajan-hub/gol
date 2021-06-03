import axios from 'axios';
import { UNSUBSCRIBE_PLAN } from './types';

export const unsubscribePlanDialog = dialogOpen => async dispatch => {
    dispatch({
        type: UNSUBSCRIBE_PLAN,
        payload: dialogOpen
    });
};