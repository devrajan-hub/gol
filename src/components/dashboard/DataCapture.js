import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import startscreen from '../../assets/images/start_screen.png';
import addicon from '../../assets/images/addicon.svg';
const DataCapture = () =>{
    return(
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
    )
}
export default DataCapture;