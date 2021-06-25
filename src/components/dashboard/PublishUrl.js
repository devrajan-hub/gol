import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import qrcode from '../../assets/images/qrcode.png';
const PublishUrl = () =>{
    return(
        <fieldset>
            <div className="urlblock row">
                <div className="col-md-3">
                </div>
                <div className="col-md-6">
                    <div className="add_url">        
                        <h2>Generate URL</h2>
                        <h4>This is the URL where user will create a GOL</h4>
                        <div className="generate-url">
                            <p>Part of shareable URL</p>
                            <div className="form-group">
                                <input type="text" name="url" className="form-control" id="" placeholder="your part .viddey.video" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-gradient">Generate</button>
                        </div>
                        <div className="show-url">
                            <div className="url-block">
                                <img src={qrcode} />
                                <NavLink to="/www.remy.gifsoutloud.com">www.remy.gifsoutloud.com</NavLink>
                            </div>    
                            <button type="submit" className="btn btn-primary btn-gradient">Save and Complete</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                </div>    
            </div>    
        </fieldset>
    )
}
export default PublishUrl;