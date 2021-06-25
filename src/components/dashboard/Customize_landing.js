import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import uploadicon from '../../../src/assets/images/plus_icon.svg';
import screenillstration from '../../../src/assets/images/landing_screen_illstration.svg';
import linkicon from '../../../src/assets/images/link_icon.svg';
import maskicon from '../../../src/assets/images/mask_icon.svg';
import melodyicon from '../../../src/assets/images/melody_icon.svg';
import arrow from '../../assets/images/arrow.svg';
import startscreen from '../../assets/images/start_screen.png';
import addicon from '../../assets/images/addicon.svg';
import qrcode from '../../assets/images/qrcode.png';
import '../../assets/js/custom.js';
import LandingScreen from './Landing_screen';
import BrandedGol from './BrandedGol';
import DataCapture from './DataCapture';
import PublishUrl from './PublishUrl';
// import {addincome} from '../../assets/js/custom'
const Customizelanding = (props) =>{
    var campaignId = props.match.params.id;
    // console.log('sadgesesgr',props.match.params.id);
    return(
        <div className="col-md-12">
            <div className="row">
                <div className="col-md-2 sidebarbg pd-left0 pd-right0">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <ul id="progressbar">
                        <li class="active" id="step1"><strong>Landing screen</strong></li>
                        <li id="step2"><strong>Branded GOL</strong></li>
                        <li id="step3"><strong>Data capture</strong></li>
                        <li id="step3"><strong>Publish</strong></li>
                    </ul>
                    <div class="customize-landing">
                        <div class="custom-landing-fields">
                            <form id="form" enctype="multipart/form-data">
                                <LandingScreen campid={campaignId} />            
                                <BrandedGol campid={campaignId} />
                                <DataCapture campid={campaignId} />    
                                <PublishUrl campid={campaignId} />                         
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customizelanding;