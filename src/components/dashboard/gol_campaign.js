import React,{Component,useState, useEffect} from 'react';
import { NavLink,Link,useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';
import {getCampaignById} from '../../actions/campaignAction';
// import { useParams } from "react-router";
import Sidebar from './Sidebar';
import addigolillustration from '../../../src/assets/images/gol_illustration.svg';
import screenillstration from '../../../src/assets/images/landing_screen_illstration.svg';
import qrcode from '../../../src/assets/images/qrcode.png';
import download from '../../../src/assets/images/download.svg';
import share from '../../../src/assets/images/share.svg';
import copy from '../../../src/assets/images/copy.svg';
import startscreen from '../../../src/assets/images/start_screen.png';
import Preview from '../../../src/assets/images/Preview.svg';


// var  campaignlist = [];
// const Golcampaign = ({campaign:{campaignlist}, getCampaignById, campid}) => {
const Golcampaign = (props) => {
    // console.log('propsdsgsdgdf',props);
    // var camprowId =  campid;
    var camprowId =  props.campid;
    // useEffect(() => {
	// 	getCampaignById(camprowId);
	// }, [camprowId, getCampaignById]);
    // console.log('campaigndfsdf',camprowId);    
    const [itemsPage, setItemsPage] = useState([]);
    const [items, setItems] = useState([]);
    const [landingItems, setLandingItems] = useState([]);
    const [packageName, setIPackageName] = useState();
    const startLanding = () =>{
        window.location.href = '/custom-landing/'+ props.campid;
    }
    
    useEffect(() => {
        fetch(`https://viddey-backend.herokuapp.com/api/v1/campaigns/${camprowId}`, {
            "method": "GET",
            "headers": {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(response => response.json())
        .then(response => {
            // console.log('response',response.payload.id);
            if(camprowId == response.payload.id){
                setItems(response.payload);
                setItemsPage(response.payload.pageName);
            }
        })
        .catch(err => { console.log(err); 
        });
    }, [camprowId])

    useEffect(() => {
        fetch(`https://viddey-backend.herokuapp.com/api/v1/landing-screens/${camprowId}`, {
                "method": "GET",
                "headers": {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            })
            .then(response => response.json())
            .then(response => {
                // console.log('response',response);
                setLandingItems(response.payload);
            })
            .catch(err => { console.log(err); 
            });
    }, [camprowId])
    
    console.log('responselandingItems',landingItems);
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

    
    console.log('camprowIditems',landingItems);
    // console.log('camprowIditems',items.brandedGOL.filter.name);
    return(
        <div className="gol-campaign">
            <div className={(itemsPage == null) ? 'gol-campaign-setting' : 'hideelement'}>
                <div className="campaign-description">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={screenillstration} />
                        </div>
                        <div className="col-md-9">
                            <div className="campaign-detail">
                                <h2>Landing screen</h2>
                                <p>Customize landing screen</p>
                                <NavLink to={{ pathname: '/custom-landing', campId: camprowId }} className="btn btn-primary btn-gradient btn-start">Start</NavLink>
                                {/* <button type="submit" onClick={startLanding} className="btn btn-primary btn-gradient btn-start" >Start</button> */}
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
            <div className={(itemsPage == null) ? 'hideelement' :'gol-campaign-data'}>   
                <div className="row">
                    <div className={packageName == 'PRO' ? 'col-md-6' :'hideelement'}>
                        <div className="qr-url-details">
                            <div className="qr-image">        
                                <img src={(items.qrcodeImageURL != null) ? items.qrcodeImageURL : qrcode} />
                            </div>
                            <div className="qr-heading">        
                                <h4>QR code link:</h4>
                                <p>{itemsPage}</p>
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
                                <NavLink to='/www.remy.gifsoutloud.com'>{itemsPage}</NavLink>
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
                            <div class="golcamp">        
                                <img src={startscreen} />
                                <img className="selectedimage" src={(landingItems != null) ? landingItems.logoURL : ''} />
                                <img className="selectedbgimage" src={(landingItems != null) ? landingItems.backgroundImageURL : ''} />
                                <div className={(landingItems != null) ? ((landingItems.overlayColor != null) ? landingItems.overlayColor.hex:'') : ''} id="overlaycolor"></div>
                            </div>
                        </div>
                        <div className="col-md-6 gol-feature-text">        
                            <h2>Landing screen & Data capture</h2>
                            <p>Customized landing screen</p>
                            <NavLink to={{pathname:'/custom-landing', campId: ((landingItems != null) ? landingItems.id :''), block:'edit'}} className="editlink">Edit</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 gol-feature gol-feature-layout-right">
                    <div className="col-md-6">        
                            <img src={Preview} />
                        </div>
                        <div className="col-md-6 gol-feature-text">        
                            <h2>Branded GOL</h2>
                            <span>Filter:</span>
                            <p>{(items.brandedGOL != null) ? items.brandedGOL.filter.name :'My Filter'}</p>
                            {/* <p>My Filter</p> */}
                            <span>Sound::</span>
                            <p>{(items.brandedGOL != null) ? items.brandedGOL.sound.name :'Mp.4'}</p>
                            {/* <p>Mp.4</p> */}
                            <NavLink to={{pathname:'/branded-gol', campid: items.id, block:'edit', campaigns:items}} className="editlink">Edit</NavLink>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Golcampaign.propTypes = {
	campaign: PropTypes.object.isRequired,
	getCampaignById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	campaign: state.campaign
});

const mapDispatchToProps = {
	getCampaignById
};

export default connect(mapStateToProps, mapDispatchToProps)(Golcampaign);


// export default Golcampaign;