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
// import {addincome} from '../../assets/js/custom'
const Customizelanding = () =>{
    
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
                            <form id="form">
                                <fieldset>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="upload-doc-block">                                                
                                                    <h2>1. Upload Logo</h2>
                                                    <p>Upload your logo in high resolution, preferably using a transparent background file in PNG format</p>
                                                    <div className="upload-block">
                                                        <div className="upload">
                                                            <img src={uploadicon} />
                                                            <p>Drop logo here or upload</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="upload-doc-block">                                                
                                                    <h2>2. Background</h2>
                                                    <p>Make sure the logo and text are clearly visible against the customized background.</p>
                                                    <div className="bg-switch">
                                                        <label className="bg-switch-light">
                                                        <input type="checkbox"></input>
                                                                <span>
                                                                    <span className="toggle-view activeblock">Color</span>
                                                                    <span className="toggle-view">Image</span>
                                                                </span>
                                                                <NavLink to="/" className="btn btn-toggle"></NavLink>
                                                        </label>
                                                    </div>
                                                    <div className="image-color-upload">
                                                        <div className="getcolor-code">
                                                            <h2>Get color code</h2>
                                                            <input type="color" id="favcolor" name="favcolor" value="#ff0000"></input>
                                                        </div>
                                                        <div className="background-image">
                                                            <div class="bg-image">
                                                            <div class="upload">
                                                                <img src={uploadicon} />
                                                                <p>Drop logo here or upload</p>
                                                            </div>
                                                            </div>
                                                            <p className="overlaytext">Overlay</p>
                                                            <div className="overlay-option">
                                                                <ul>
                                                                    <li><label><input type="radio" name="overlay-optipon"></input>No</label></li>
                                                                    <li><label><input type="radio" name="overlay-optipon"></input>Black</label></li>
                                                                    <li><label><input type="radio" name="overlay-optipon"></input>White</label></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="upload-doc-block">                                                
                                                    <h2>3. Message</h2>
                                                    <p>Input Landing Screen Message</p>
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" placeholder="Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="upload-doc-block">                                                
                                                    <h2>4. Message color</h2>
                                                    <p>Make sure the text is clearly visible against the customized background.</p>
                                                    <div className="form-group">
                                                        <input type="color" id="favcolor1" className="favcolor" name="favcolor" value="#ff0000"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <img src={startscreen} />
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="col-md-7">   
                                        <input type="button" name="next-step" className="next-step btn btn-gradient" value="Save and Continue" ></input>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="branded-gol row">
                                                    <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                                        <NavLink to="/add-filter">
                                                            <div className="col-md-3 gol-image">
                                                                <img src={maskicon} />
                                                            </div>
                                                            <div className="col-md-7 gol-content pd-right0">
                                                                <div className="branded-gol-content">
                                                                    <h3>Add Filters</h3>
                                                                    <p>Choose filters/effects from gallery</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 arrow-left">
                                                                <img src={arrow} />        
                                                            </div>
                                                        </NavLink>
                                                    </div>
                                                    <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                                        <NavLink to="/add-sound">
                                                            <div className="col-md-3 gol-image">
                                                                <img src={melodyicon} />
                                                            </div>
                                                            <div className="col-md-7 gol-content pd-right0">
                                                                <div className="branded-gol-content">
                                                                    <h3>Add Sound</h3>
                                                                    <p>Choose sounds/tunes from gallery or upload</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-2 arrow-left">
                                                                <img src={arrow} />        
                                                            </div>
                                                        </NavLink>    
                                                    </div>
                                                    <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                                        <NavLink to="/add-filter">
                                                            <div className="col-md-3 gol-image">
                                                                <img src={linkicon} />
                                                            </div>
                                                            <div className="col-md-9 gol-content pd-right0">
                                                                <div className="branded-gol-content">
                                                                    <h3>Add Brand URL</h3>
                                                                    <p>Input your URL</p>
                                                                </div>
                                                            </div>
                                                        </NavLink>    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <img src={startscreen} />
                                            </div>
                                        </div>    
                                    </div>
                                    <div className="col-md-7">   
                                        <input type="button" name="next-step" className="next-step btn btn-gradient" value="Save and Continue" ></input>
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="data-capture">
                                                    <div className="data-capture-block">
                                                        <h2>1. Promo</h2>
                                                        <p>Input your promo message</p>
                                                        <div className="form-group">
                                                            <textarea className="form-control" name="message" placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="data-capture-block">
                                                        <h2>2. Data capture</h2>
                                                        <p className="promo-capture">Select the points you want to ask the user</p>
                                                        <div id="data-capture-list">
                                                            <label class="checkbox-container" for="email">Email
                                                                <input type="checkbox" id="email" value="option1" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <label class="checkbox-container" for="first-name">First name
                                                                <input type="checkbox" id="first-name" value="option1" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <label class="checkbox-container" for="last-name">Last name
                                                                <input type="checkbox" id="last-name" value="option1" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <label class="checkbox-container" for="dob">Date of birth
                                                                <input type="checkbox" id="dob" value="option1" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <label class="checkbox-container" for="phoneno">Phone number
                                                                <input type="checkbox" id="phoneno" value="option1" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <label class="checkbox-container" for="postalcode">Postal code
                                                                <input type="checkbox" id="postalcode" value="option1" />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                        </div>
                                                        <div className="addques">
                                                            <img src={addicon} />
                                                            <span className="add-data-capture">Add your question</span>
                                                        </div>    
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <img src={startscreen} />
                                            </div>    
                                        </div>    
                                    </div>
                                    <div className="col-md-7">   
                                        <input type="button" name="next-step" className="next-step btn btn-gradient" value="Save and Continue" ></input>
                                    </div>    
                                </fieldset>
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
                            </form>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customizelanding;