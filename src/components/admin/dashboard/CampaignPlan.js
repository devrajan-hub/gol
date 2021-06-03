import React, { useEffect, Fragment } from 'react';
import {Navlink,Link} from 'react-router-dom';
import Sidebar from  '../Sidebar';
import closeicon from '../../../assets/images/close_icon.svg';
import arrow from '../../../assets/images/arrow.svg';
import {setPeriodDialog} from '../../../actions/adminAction';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SelectPeriod from '../../popups/SelectPeriod';

const CampaignPlan = ({
    admin: {
		slctPeriodDialogOpen
	},
    setPeriodDialog
    }) => {
    return(
        <Fragment>
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="headingblock">
                        <h1>Company name</h1> 
                        <div className="closebtn">
                            <img src={closeicon} />
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="campplan">
                        <Link to="/"><img src={arrow} />Back</Link>
                        <h2>Plan</h2>    
                    </div>
                    <div className="clearfix"></div>
                    <div className="campdash-lists">
                        <ul>
                            <li className="dash-list">
                                <div className="dashname">
                                    <h4>Starter</h4>
                                    <p>$0 Per month</p>
                                </div>
                                <div className="dash-detail">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>                           
                                </div>    
                            </li>
                            <li className="dash-list">
                                <div className="dashname">
                                    <h4>Pro</h4>
                                    <p>$20 Per month</p>
                                </div>
                                <div className="dash-detail">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>                 
                                </div>    
                            </li>
                            <li className="dash-list">
                                <div className="dashname">
                                    <h4>Enterprise</h4>
                                    <p>Individual price</p>
                                </div>
                                <div className="dash-detail">
                                    <label class="switch">
                                        <input type="checkbox" />
                                        <span class="slider round"></span>
                                    </label>                 
                                </div>    
                            </li>
                            <li className="dash-list">
                                <div className="dashname">
                                    <h4>Free</h4>
                                    {setPeriodDialog && <SelectPeriod />}
                                    {/* <button className="" onClick={() => setPeriodDialog(true)}>Select Period</button> */}
                                </div>
                                <div className="dash-detail">
                                    <button type="button" className="prplebg">Cancle</button>                 
                                </div>
                            </li>
                        </ul>    
                    </div>    
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
       
        </Fragment>
    )
}

CampaignPlan.propTypes = {
    admin: PropTypes.object.isRequired,
	setPeriodDialog: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	admin: state.admin
});

const mapDispatchToProps = {
	setPeriodDialog
};
export default connect(mapStateToProps, mapDispatchToProps)(CampaignPlan);
// export default CampaignPlan;