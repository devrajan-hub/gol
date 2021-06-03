import axios from 'axios';
import {SELECT_PERIOD} from './types';

export const setPeriodDialog = dialogOpen => async dispatch => {
	dispatch({
		type: SELECT_PERIOD,
		payload: dialogOpen
	});
};