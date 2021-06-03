import axios from 'axios';
import CircularJSON from 'circular-json';
import Cookies from 'js-cookie'
import btoa from 'btoa';
// var CircularJSON = require('circular-json');
import {
	LOGIN_SUCCESS
} from './types';
const csrftoken = Cookies.get('csrftoken');
const username = 'smith@test.com';
const password = 'admin@4020';
const auth = `Bearer ${btoa(`${username}:${password}`)}`
export const loginUser = userdata => async dispatch =>{
    const config = { headers: { 
	 'Authorization': `Bearer ${localStorage.getItem('token')}`,
	//  'Authorization': auth,
     'Accept': 'application/json',
     'Content-Type': 'application/json',
	 'Access-Control-Allow-Origin': '*',
	 'Access-Control-Allow-Methods': 'true',
	 'Access-Control-Allow-Headers': '*',
	 'X-CSRFToken': csrftoken  } };
	const body = CircularJSON.stringify(userdata);
    try {
		const res = await axios.post('https://viddey-backend.herokuapp.com/api/v1/users/login', body, config, {xsrfCookieName: 'XSRF-TOKEN', xsrfHeaderName: 'X-XSRF-TOKEN'});
		console.log('dvdsvdsvdsv',res);
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
    } catch (error) {
		console.log('errorerror',error);
	}   
};