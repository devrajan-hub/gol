import React from 'react';
import Sidebar from './Sidebar';
import '../../../src/assets/css/custom.css';
import '../../../src/assets/js/custom.js';
import '../../assets/js/canvasjs.min.js';
import Golgallery from './Gol_gallery';
import Analytic from '../pages/Analytics';
import CrmDatabase from '../pages/CrmDatabase';
import { NavLink } from 'react-router-dom';
const Dashborad = () => {
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="dashboard-content">
                        <div className="row">
                            <div className="col-md-3">
                                <h1>Dashbord</h1>
                            </div>
                            <div className="col-md-9 pd-right0">
                                <ul className="campaign_list">
                                    <li><NavLink className="activenav" to="/">Overall</NavLink></li>
                                    <li><NavLink to="/">Graduated</NavLink></li>
                                    <li><NavLink to="/">Womanish</NavLink></li>
                                    <li><NavLink to="/">Remy Martin</NavLink></li>
                                </ul>    
                            </div>    
                        </div>    
                        
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
export default Dashborad;