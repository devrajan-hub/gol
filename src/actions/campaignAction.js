import axios from 'axios';
import  { GET_ALL_CAMPAIGN, CAMPAIGN_ERROR }  from './types';

export const getAllCampaign = () => async dispatch =>{
    const config = { headers: { 'Content-Type': 'application/json' } };
    try {
		const res = await axios.get('https://viddey-backend.herokuapp.com/api/v1/campaigns');
		console.log('campaign',res);
		dispatch({
				type: GET_ALL_CAMPAIGN,
				payload: res.data
		});
	} catch (err) {
		dispatch({
            type: CAMPAIGN_ERROR,    
			payload: err.response
		});
	}
}