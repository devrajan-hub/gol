import React,{Component,useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import addigolillustration from '../../../src/assets/images/gol_illustration.svg';
import screenillstration from '../../../src/assets/images/landing_screen_illstration.svg';
import qrcode from '../../../src/assets/images/qrcode.png';
import download from '../../../src/assets/images/download.svg';
import share from '../../../src/assets/images/share.svg';
import copy from '../../../src/assets/images/copy.svg';
import startscreen from '../../../src/assets/images/start_screen.png';

const golcampaign = () => {
    const startLanding = () =>{
        window.location.href = '/custom-landing';
    }
    return(
        <div className="gol-campaign">
            <div className="gol-campaign-setting">
                <div className="campaign-description">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={screenillstration} />
                        </div>
                        <div className="col-md-9">
                            <div className="campaign-detail">
                                <h2>Landing screen</h2>
                                <p>Customize landing screen</p>
                                {/* <NavLink to='/custom-landing' className="btn btn-primary btn-gradient btn-start">Start</NavLink> */}
                                <button type="submit" onClick={startLanding} className="btn btn-primary btn-gradient btn-start" >Start</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="campaign-description">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={addigolillustration} />
                        </div>
                        <div className="col-md-9">
                            <div className="campaign-detail">
                                <h2>Branded GOL</h2>
                                <p>Create a GIF template for your fans to share</p>
                                <button type="submit" className="btn btn-primary btn-start-defult btn-start">Start at the landing screen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gol-campaign-data">   
                <div className="row">
                    <div className="col-md-6">
                        <div className="qr-url-details">
                            <div className="qr-image">        
                                <img src={qrcode} />
                            </div>
                            <div className="qr-heading">        
                                <h4>QR code link:</h4>
                                <p>www.remy.gifsoutloud.com</p>
                            </div>
                            <div className="share-link">        
                                <img className="linkimg" src={download} />
                                <img className="linkimg" src={share} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 url-design-block">
                        <div className="url-detail-block">
                            <div className="url-details">        
                                <h4>URL:</h4>
                                <NavLink to='/www.remy.gifsoutloud.com'>www.remy.gifsoutloud.com</NavLink>
                            </div>
                            <div className="share-link">        
                                <img className="linkimg" src={copy} />
                                <img className="linkimg" src={share} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 gol-layout">
                    <div className="col-md-6 gol-feature gol-feature-layout-left">
                        <div className="col-md-6">        
                            <img src={startscreen} />
                        </div>
                        <div className="col-md-6 gol-feature-text">        
                            <h2>Landing screen & Data capture</h2>
                            <p>Customized landing screen</p>
                            <NavLink to="/" className="editlink">Edit</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 gol-feature gol-feature-layout-right">
                    <div className="col-md-6">        
                            <img src={startscreen} />
                        </div>
                        <div className="col-md-6 gol-feature-text">        
                            <h2>Branded GOL</h2>
                            <span>Filter:</span>
                            <p>Filter name</p>
                            <span>Sound::</span>
                            <p>Sound name</p>
                            <NavLink to="/" className="editlink">Edit</NavLink>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default golcampaign;