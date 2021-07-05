import React from 'react';
import Sidebar from '../Sidebar';
import {Navlink,Link} from 'react-router-dom';
import '../../../assets/css/custom.css';
import closeicon from '../../../assets/images/close_icon.svg';
import Golgallery from '../../dashboard/Gol_gallery';
import Analytic from './CompanyAnalytics';
import CrmDatabase from '../../pages/CrmDatabase';
import arrow from '../../../assets/images/arrow.svg';

const companyDashboard = () => {
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10 company-dashboard">
                    <div className="dashboard-content">
                        <div className="headingblock">
                            <h1>Company name</h1> 
                            <div className="closebtn">
                                <img src={closeicon} />
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-12">
                            <div className="campplan row">
                                <div className="col-md-3">
                                    <Link to="/"><img src={arrow} />Back</Link>
                                    <h2>Dashboard</h2>
                                </div>
                                <div className="col-md-9 pd-right0">
                                    <ul className="campaign_list">
                                        <li><Link className="activenav" to="/">Overall</Link></li>
                                        <li><Link to="/">Compaign Name1</Link></li>
                                        <li><Link to="/">Compaign Name2</Link></li>
                                    </ul>    
                                </div>    
                            </div>    
                        </div>
                        <div className="clearfix"></div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">GOL Gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Analytics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">CRM database</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                               <Golgallery />
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <Analytic />
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <CrmDatabase />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default companyDashboard;