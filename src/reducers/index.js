import { combineReducers } from 'redux';
import admin from '../reducers/adminReducer';
import account from '../reducers/accountReducer';
import auth from '../reducers/authReducer';
import campaign from '../reducers/campaignReducer';

export default combineReducers({
    admin,account, auth, campaign
});