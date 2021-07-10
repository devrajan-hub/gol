import axios from 'axios';
import  { GET_CAMPAIGN, GET_ALL_CAMPAIGN, CAMPAIGN_ERROR }  from './types';

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

export const getCampaignById = camprowId => async dispatch =>{
	console.log('camprowId',camprowId);
    const config = { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } };
    try {
		// const res = await axios.get(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}`, {config});
		// console.log('campaign',res);
		// dispatch({
		// 		type: GET_CAMPAIGN,
		// 		payload: res.data
		// });
		fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}`, {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log('response',response);
			dispatch({
				type: GET_CAMPAIGN,
				payload: response.payload
			});
            // setItems(response.payload);
            // setItemsPage(response.payload.pageName);
        })
        .catch(err => { console.log(err); 
        });
	} catch (err) {
		dispatch({
            type: CAMPAIGN_ERROR,    
			payload: err.response
		});
	}
}