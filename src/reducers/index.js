import { combineReducers } from 'redux';
import admin from '../reducers/adminReducer';
import account from '../reducers/accountReducer';
import auth from '../reducers/authReducer';

export default combineReducers({
    admin,account, auth
});