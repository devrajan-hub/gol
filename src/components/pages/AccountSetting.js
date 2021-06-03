import React, { useEffect, Fragment } from 'react';
import {Navlink,Link} from 'react-router-dom';
import Sidebar from '../dashboard/Sidebar';
import { unsubscribePlanDialog } from '../../actions/accountAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UnsubscribePlan from '../popups/UnsubscribePlan';

const AccountSetting = ({
    account:{
        unsubscribeDialogOpen
    },
    unsubscribePlanDialog
}) =>{
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
                                        <p>PRO</p>
                                    </div>
                                    <div class="form-group col-md-2 plans-btn-block">
                                        {/* <Link className="unsubscribe-btn" to='/'>Unsubscribe</Link>     */}
                                        {unsubscribePlanDialog && <UnsubscribePlan />}                     
                                        <Link className="gradien-transparent-bg" to='/plans'>Change</Link>                         
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <p>email.example@gmail.com</p>
                                </div>
                                <div class="form-row">
                                    <div class="form-group col-md-10">
                                        <label>Password:</label>
                                        <p>••••••••••••••••••••</p>
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