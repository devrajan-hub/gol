import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import maskicon from '../../assets/images/add-onsmask_icon.svg';
import musicicon from '../../assets/images/add-ons-music-icon.svg';
import printicon from '../../assets/images/print-icon.svg';
import addqricon from '../../assets/images/add-ons-qr-icon.svg';

const Addons = () => {
    return(
        <div className="campaign-addons">
            <div className="container">
            <div className="col-md-12">
                <div className="row">        
                    <div className="col-md-3">
                        <div className="camp-addons">
                            <img src={maskicon} />
                            <h2>Customize filter</h2>
                            <p>We will develop a unique filter for your brand</p>
                            <NavLink to='/' className="select-sound">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="camp-addons">
                            <img src={musicicon} />
                            <h2>Music branding development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <NavLink to='/' className="select-sound">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="camp-addons">
                            <img src={printicon} />
                            <h2>QR print design</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <NavLink to='/' className="select-sound">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="camp-addons purchase-plan">
                            <img src={addqricon} />
                            <h2>QR code generation</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            <p className="plan-price">$19.99</p>
                            <NavLink to='/' className="select-sound">Purchase</NavLink>
                        </div>
                    </div>    
                </div>    
            </div>    
            </div>    
        </div>    
    )
}
export default Addons;