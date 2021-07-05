import React from 'react';
import Sidebar from './Sidebar';
import Golcampaign from './gol_campaign';
import Campaddons from './Campaign_addons';
const Campaignsetting = (props) => {
    const dataid  = props.location.data;
    console.log('props',props);
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="campaign-setting dashboard-content">
                        <h1>Campaign Setting</h1>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="gol-tab" data-toggle="tab" href="#golcampaign" role="tab" aria-controls="home" aria-selected="true">GOL Campaign</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="add-tab" data-toggle="tab" href="#addtab" role="tab" aria-controls="profile" aria-selected="false">Add ons</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="golcampaign" role="tabpanel" aria-labelledby="home-tab">
                                <Golcampaign campid={dataid} />          
                            </div>
                            <div class="tab-pane fade" id="addtab" role="tabpanel" aria-labelledby="profile-tab">
                                <Campaddons />
                            </div>
                        </div>
                    </div>    
                </div>    
            </div>    
        </div>    
    )
}

export default Campaignsetting;