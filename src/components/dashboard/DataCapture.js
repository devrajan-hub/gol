import React, {useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import startscreen from '../../assets/images/start_screen.png';
import addicon from '../../assets/images/addicon.svg';
const DataCapture = () =>{
    const [dataCapture, setDataCapture] = useState();
    const changeDataCapture = (event) => {
        if(event.target.checked){
            setDataCapture(1);
         } else {
            setDataCapture(0);
         }
    }
    console.log('dataCapture',dataCapture);
    return(
        <fieldset>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-7">
                        <div className="check-datacapture">
                            <div className="check-capture data-capture-block">
                                <h2>Data capture</h2>
                                <div className="dash-detail">
                                    <label class="switch">
                                        <input type="checkbox" name="datacapture" onChange={changeDataCapture} value="0" />
                                        <span class="slider round"></span>
                                    </label>                 
                                </div>
                            </div>
                            <button type="button" name="next-step" className="next-step btn btn-gradient" >Skip</button>    
                        </div>    
                        <div className={(dataCapture == 1) ? 'data-capture' : 'data-capture hideelement'}>
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
                <input type="button" name="next-step" className="next-step btn btn-gradient" value="Save and Continue" />
            </div>    
        </fieldset>
    )
}
export default DataCapture;