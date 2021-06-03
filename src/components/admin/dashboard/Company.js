import React from 'react';
import Sidebar from '../Sidebar';
import {Navlink,Link} from 'react-router-dom';
import closeicon from '../../../assets/images/close_icon.svg';
import plusicon from '../../../assets/images/plus_icon.svg';
import arrow from '../../../assets/images/arrow.svg';

const Company = () => {
    return(
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
                    <div className="campaign">
                        <h3>Campaigns</h3>
                        <div className="clearfix"></div>
                        <div className="campaign-list col-md-12">
                            <div className="row">
                                <div className="campaignblock">
                                    <div className="campaign-name-block">
                                        <h5>Campaign Name 1</h5>
                                        <p>on</p>
                                    </div>
                                </div>
                                <div className="create-campaign">
                                    <div className="new-campaign">
                                        <Link to="/">
                                            <img src={plusicon} />
                                            <p>Create Campaign</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="campdash-lists">
                            <ul>
                                <li className="dash-list">
                                    <div className="dashname">
                                        <h4>Dashboard</h4>
                                        <p>Monitor brand success</p>
                                    </div>
                                    <div className="dash-detail">
                                        <img src={arrow} />                 
                                    </div>    
                                </li>
                                <li className="dash-list">
                                    <div className="dashname">
                                        <h4>Plan</h4>
                                        <p>Starter</p>
                                    </div>
                                    <div className="dash-detail">
                                        <img src={arrow} />                 
                                    </div>    
                                </li>
                                <li className="dash-list">
                                    <div className="dashname">
                                        <h4>Account info</h4>
                                        <p>user.email.example@gmail.com</p>
                                    </div>
                                    <div className="dash-detail">
                                        <img src={arrow} />                 
                                    </div>    
                                </li>
                                <li className="dash-list">
                                    <div className="dashname">
                                        <h4>Account status</h4>
                                        <p>Active</p>
                                    </div>
                                    <div className="dash-detail">
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>                 
                                    </div>    
                                </li>
                            </ul>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Company;