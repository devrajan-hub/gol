import React, { useEffect, Fragment, useState} from 'react';
import {Navlink,Link} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import { unsubscribePlanDialog } from '../../actions/accountAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UnsubscribePlan from '../popups/UnsubscribePlan';

const AccountSetting = ({ account:{ unsubscribeDialogOpen },  unsubscribePlanDialog }) =>{
    const [items, setItems] = useState([]);
    const [packageName, setIPackageName] = useState();
    useEffect(() => {
        fetch('https://viddey-backend.herokuapp.com/api/v1/tickets', {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(response => response.json())
        .then(response => {
            // console.log('response',response);
            setIPackageName(response.payload.packageType);
        })
        .catch(err => { console.log(err); 
        });
    })
    useEffect(() => {
        var userid =   `${localStorage.getItem('userid')}`;
        // console.log('userid',userid);
        fetch("https://viddey-backend.herokuapp.com/api/v1/users/"+userid, {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            setItems(response.payload);
        })
        .catch(err => { console.log(err); 
        });
    })
    return(
        <div className="col-md-12">
            <div className="row">
            <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="heading-block">
                        <h1>Account Setting</h1> 
                    </div>
                    <div className="account-setting">
                        <div className="col-md-12">
                            <div className="account-detail">
                                <div class="form-row">
                                    <div class="form-group col-md-10">
                                        <label>Plan:</label>
                                        <p>{packageName}</p>
                                    </div>
                                    <div class="form-group col-md-2 plans-btn-block">
                                        {/* <Link className="unsubscribe-btn" to='/'>Unsubscribe</Link>     */}
                                        {unsubscribePlanDialog && <UnsubscribePlan />}                     
                                        <Link className="gradien-transparent-bg" to='/plans'>Change</Link>                         
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <p>{items.email}</p>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-10 accpassword">
                                        <label>Password:</label>
                                        {/* <p><input type="password" value={items.password} disabled/></p> */}
                                        <p>***************</p>
                                    </div>
                                    <div class="form-group col-md-2 plans-btn-block">
                                        <Link className="gradien-transparent-bg" to='/change-password'>Edit</Link>                         
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>    
    )
}

AccountSetting.propTypes = {
    account: PropTypes.object.isRequired,
	unsubscribePlanDialog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	account: state.account
});

const mapDispatchToProps = {
	unsubscribePlanDialog
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountSetting);

// export default AccountSetting;